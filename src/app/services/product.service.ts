import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44393/api';
  constructor(private httpClient: HttpClient) { }
  
  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "/products/getall";
   return this.httpClient
      .get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "/products/getbycategory?categoryId="+categoryId;
    return this.httpClient
       .get<ListResponseModel<Product>>(newPath);
   }

   add(product:Product):Observable<ListResponseModel<Product>>{
    return this.httpClient.post<ListResponseModel<Product>>(this.apiUrl+"/products/add",product);
   }
}
