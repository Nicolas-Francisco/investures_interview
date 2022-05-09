import { Component } from '@angular/core';
import { ProductProviderService } from '@providers/product/product-provider.service';
import { PurchaseProviderService } from '@providers/purchase/purchase-provider.service';
import { Product } from '@models/product.model';
import { Purchase } from '@models/purchase.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public isLoad:boolean= false;
  public products: Product[];

  constructor(
    private productProviderService: ProductProviderService,
    private purchaseProviderService: PurchaseProviderService,
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    // this.products = <Product[]> await this.productProviderService.get();
    // this.purchases = <Purchase[]> await this.purchaseProviderService.get();
    // this.isLoad = true;
  }
}
