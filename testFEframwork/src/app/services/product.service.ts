import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = " http://localhost:3000/products"
  constructor(private http: HttpClient) { }

  getProduct(id: any){
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }
  getProductList(){
    return this.http.get<IProduct[]>(`${this.API_URL}`)
  }
  ProductAdd(product: IProduct){
    return this.http.post<IProduct>(`${this.API_URL}`,product)
  }
  ProductUpdate(product: IProduct){
    return this.http.put<IProduct>(`${this.API_URL}/${product.id}`, product)
  }
  ProductRemove(id:number){
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }
}
