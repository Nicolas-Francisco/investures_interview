import { Injectable } from '@angular/core';
import { HttpService } from '@services/http.service';
import { Product } from '@models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductProviderService {
  constructor(
    private HttpService: HttpService
  ) { }


  public get(): Observable<Product> {

    return this.HttpService.get<Product>('/products');
  }
}
