import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

interface HttpOptions {
  headers: HttpHeaders
};

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private httpOptions: HttpOptions;
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://private-anon-97ba28ab42-inventurestest.apiary-mock.com";

    this.httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
  }

  public get<type>(path: string){
    return this.httpClient.get<type>(this.baseUrl + path, this.httpOptions)
      .pipe(map((data: any) => {
        return data.message as type;
      }));
  }
}
