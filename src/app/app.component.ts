import { Component } from '@angular/core';
import { ProductProviderService } from '@providers/product/product-provider.service';
import { PurchaseProviderService } from '@providers/purchase/purchase-provider.service';
import { Product, MainProduct } from '@models/product.model';
import { MainPurchase, Purchase } from '@models/purchase.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public isLoad:boolean= false;
  public products: MainProduct[];
  public purchases: MainPurchase[];
  public items = [1, 2, 3];

  constructor(
    private productProviderService: ProductProviderService,
    private purchaseProviderService: PurchaseProviderService,
  ) {
    this.products = [];
    this.purchases = [];
  }

  // ngOnInit(): void {
  //   try {
  //     this.productProviderService.get().subscribe(value => {
  //       console.log(value);
  //       this.products = value.payload;
  //     });

  //     this.showData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // private showData(){
  //   console.log(this.products);
  // }
}
