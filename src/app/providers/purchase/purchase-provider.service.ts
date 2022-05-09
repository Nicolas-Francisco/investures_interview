import { Injectable } from '@angular/core';
import { HttpService } from '@services/http.service';
import { Purchase } from '@models/purchase.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PurchaseProviderService {
  constructor(
    private HttpService: HttpService
  ) { }


  public get(): Observable<Purchase> {
    return this.HttpService.get<Purchase>('/purchases');
  }
}
