import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType} from "@angular/common/http";
import {BehaviorSubject, defer, Observable, map, catchError, throwError, finalize} from "rxjs";
import {ProductModel, RequestProgressInterface} from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private _loadingProducts: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  get loadingProducts$(): Observable<boolean>{
    return this._loadingProducts.asObservable();
  }

  private _progress: RequestProgressInterface = { upload: new BehaviorSubject<number>(0) , download: new BehaviorSubject<number>(0) };

  get downloadProgress$(): Observable<number> {
    return this._progress.download.asObservable();
  }

  public getProducts(): Observable<ProductModel[]> {
    return defer(() => {
      this._loadingProducts.next(true);
      return this.http.get<ProductModel[]>('https://fakestoreapi.com/products', {reportProgress: true, observe: 'events'})
        .pipe(
          map((event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.DownloadProgress:
                this._progress.download.next(Math.round(100 * event.loaded / event.total));
                break;
              case HttpEventType.Response:
                return event.body;
            }
          }),
          catchError( error => {
            return throwError(error);
          }),
          finalize(() => {
            this._loadingProducts.next(false);
          })
        );
    });
  }

  public getCategories(): Observable<string[]> {
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  public addProduct(product: Exclude<ProductModel,'id' | 'rating'>): Observable<ProductModel>{
    return this.http.post<ProductModel>('https://fakestoreapi.com/products', product);
  }

  public updateProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>('https://fakestoreapi.com/products/' + product.id , product);
  }

  public deleteProduct(id: number): Observable<boolean> {
    return this.http.delete<boolean>('https://fakestoreapi.com/products/' + id );
  }
}
