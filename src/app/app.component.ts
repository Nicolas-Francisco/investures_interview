import { Component } from '@angular/core';
import { ProductProviderService } from '@providers/product/product-provider.service';
import { PurchaseProviderService } from '@providers/purchase/purchase-provider.service';
import { Product, MainProduct } from '@models/product.model';
import { MainPurchase, Purchase } from '@models/purchase.model';
import { Pastillero, MainRemedio } from '@models/pastillero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public mi_pastillero : Pastillero;
  public products: MainProduct[];
  public purchases: MainPurchase[];
  public amount_of_pills_by_product: {[id:number]: number} = {};

  constructor(
    private productProviderService: ProductProviderService,
    private purchaseProviderService: PurchaseProviderService,
  ) {
    this.mi_pastillero = {remedios: []};
    this.products = [];
    this.purchases = [];
  }

  ngOnInit(): void {
    this.productProviderService.get().subscribe(prod => {
      this.products = prod.payload;
    },
      (error:any)=>{console.log(error)}
    )

    this.purchaseProviderService.get().subscribe(prod => {
      this.purchases = prod.payload;
    },
      (error:any)=>{console.log(error)}
    )

    this.calculate_amount_of_pills();
    this.add_product_to_pastillero();
  }


  // Función que a partir de los productos en la lista de productos,
  // se busca dentro de su detalle la cantidad de comprimidos que este contiene.
  private calculate_amount_of_pills() {
    this.products.forEach(product => {
      // si el producto tiene variable display nula,
      // entonces se asume que solo tiene una dósis
      if (product.display === null) {
        this.amount_of_pills_by_product[product.id] = 1;
      } else {
        // si no, dentro del detalle display del producto
        // se busca la palabra clave "comprimidos" y se obtiene
        // la cantidad más cercana dentro de la lista de palabras:
        let display_words = product.display.split(" ");
        for (let i = 0; i < display_words.length; i++) {
          if (display_words[i] === "comprimidos") {
            try{ // si la palabra anterior no es un int
              this.amount_of_pills_by_product[product.id] = parseInt(display_words[i-1]);
            } catch (error) { // entonces debe ser la siguiente
              this.amount_of_pills_by_product[product.id] = parseInt(display_words[i+1]);
            }
          }
        }
      }
    })
  }


  // función que a partir de los productos comprados en la lista de compras
  // purchases, se calcula la cantidad de comprimidos que se compraron y
  // además se calcula la cantidad de comprimidos que quedan antes de que
  // se acaben en base a la fecha de compra.
  private add_product_to_pastillero() {
    // diccionario que guardará los productos al pastillero
    let pills_left : Pastillero = {remedios: []};

    // se recorre la lista de compras
    this.purchases.forEach(purchase => {
      // obtenemos la fecha de compra y la fecha de hoy
      let date = new Date(purchase.received_date);
      let today = new Date();
      // se recorre la lista de productos comprados
      purchase.details.forEach(detail => {
        // calculamos la cantidad de comprimidos que se compraron y los que quedan
        // asumiendo que se consume un comprimido al día
        let amount_of_pills_bought = this.amount_of_pills_by_product[detail.product_id] * detail.quantity;
        let pills_left_before_today = amount_of_pills_bought - (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);

        // si el producto no está en el pastillero, se agrega
        if (!pills_left.remedios.find(remedio => remedio.id === detail.product_id)) {
          pills_left.remedios.push({
            id: detail.product_id,
            product: this.products.find(product => product.id === detail.product_id)!,
            amount_left: pills_left_before_today
          });
        } else { // si ya está en el pastillero, se suma
          pills_left.remedios.find(remedio => remedio.id === detail.product_id)!.amount_left += pills_left_before_today;
        }
      })
    })

    // se asigna el diccionario a la variable mi_pastillero
    this.mi_pastillero = pills_left;
  }
}
