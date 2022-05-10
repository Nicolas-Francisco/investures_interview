import { Component } from '@angular/core';
import { ProductProviderService } from '@providers/product/product-provider.service';
import { PurchaseProviderService } from '@providers/purchase/purchase-provider.service';
import { Product, MainProduct } from '@models/product.model';
import { MainPurchase, Purchase } from '@models/purchase.model';
import { Pastillero, MainRemedio } from '@models/pastillero.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public mi_pastillero : Pastillero;
  public products: MainProduct[];
  public purchases: MainPurchase[];
  public amount_of_pills_by_product: {[id:number]: number};

  constructor(
    private productProviderService: ProductProviderService,
    private purchaseProviderService: PurchaseProviderService,
    private titleService: Title
  ) {
    this.amount_of_pills_by_product = {};
    this.mi_pastillero = {remedios: []};
    this.products = [];
    this.purchases = [];
  }

  ngOnInit(): void {
    this.titleService.setTitle("Mi Pastillero");
    this.getData();
  }

  private async getData() {
    let prod = <Product> await this.productProviderService.get().toPromise();
    let purc = <Purchase> await this.purchaseProviderService.get().toPromise();
    this.products = prod.payload;
    this.purchases = purc.payload;

    // this.calculate_amount_of_pills();
    this.update_pastillero();
  }


  // // Función que a partir de los productos en la lista de productos,
  // // se busca dentro de su detalle la cantidad de comprimidos que este contiene.
  // private calculate_amount_of_pills() {
  //   // se recorre la lista de productos
  //   this.products.forEach(product => {
  //     // si el producto tiene variable display nula,
  //     // entonces se asume que solo tiene una dósis
  //     if (product.display === null) {
  //       this.amount_of_pills_by_product[product.id] = 1;
  //     } else {
  //       // si no, dentro del detalle display del producto
  //       // se busca la palabra clave "comprimidos" y se obtiene
  //       // la cantidad más cercana dentro de la lista de palabras:
  //       let display_words = product.display.split(" ");
  //       for (let i = 0; i < display_words.length; i++) {
  //         if (display_words[i] === "comprimidos" || display_words[i] === "comprimidos.") {
  //           try{ // si la palabra anterior no es un int
  //             this.amount_of_pills_by_product[product.id] = Number(display_words[i-1]);
  //           } catch (error) { // entonces debe ser la siguiente
  //             this.amount_of_pills_by_product[product.id] = Number(display_words[i+1]);
  //           }
  //           break;
  //         }
  //       }
  //     }
  //   })

  //   console.log("amount_of_pills_by_product", this.amount_of_pills_by_product);
  // }


  // función que a partir de los productos comprados en la lista de compras
  // purchases, se calcula la cantidad de comprimidos que se compraron y
  // además se calcula la cantidad de comprimidos que quedan antes de que
  // se acaben en base a la fecha de compra.
  private update_pastillero() {
    // diccionario que guardará los productos al pastillero
    let pills_left : Pastillero = {remedios: []};

    // se recorre la lista de compras
    this.purchases.forEach(purchase => {
      // obtenemos la fecha de compra y la fecha de hoy
      let date = new Date(purchase.received_date);
      // se recorre la lista de productos comprados
      purchase.details.forEach(detail => {
        // calculamos la cantidad de comprimidos que se compraron y se guarda
        // la fecha de compra del producto
        let amount_of_pills = (detail.quantity);
        if (!pills_left.remedios.find(remedio => remedio.id === detail.product_id)) {
          pills_left.remedios.push({
            id: detail.product_id,
            product: this.products.find(product => product.id === detail.product_id)!,
            amount_left: amount_of_pills,
            starting_date: date
          });
        } else { // si ya está en el pastillero
          let remedio = pills_left.remedios.find(remedio => remedio.id === detail.product_id)!
          if (remedio.starting_date < date) {
            // Si la fecha de compra registrada es más reciente que la guardada,
            // entonces debemos actualizarla junto con la cantidad de pastillas
            // que quedan para esa fecha

            // calculamos la cantidad de pastillas que deberían haberse tomado
            let diffInMs = Math.abs(remedio.starting_date.getTime() - date.getTime());
            let diffsInDays = diffInMs / (1000 * 60 * 60 * 24);

            // calculamos la cantidad de pastillas que quedan para esa fecha
            let count_pills_left = remedio.amount_left - Math.floor(diffsInDays);

            // evitamos que se queden pastillas negativas y evitamos contar pastillas que ya no se
            // necesitan (que se acabaron antes de la fecha de compra)
            if (count_pills_left < 0) {
              count_pills_left = 0;
            }

            // actualizamos el pastillero
            pills_left.remedios.find(remedio => remedio.id === detail.product_id)!.amount_left = (detail.quantity + count_pills_left);
            pills_left.remedios.find(remedio => remedio.id === detail.product_id)!.starting_date = date;
          }
        }
      })
    })

    // se asigna el diccionario a la variable mi_pastillero
    this.mi_pastillero = pills_left;
    console.log("pastillero", this.mi_pastillero);
  }
}
