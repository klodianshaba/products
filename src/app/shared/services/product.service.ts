import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModel} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('https://fakestoreapi.com/products').pipe();
  }
}
