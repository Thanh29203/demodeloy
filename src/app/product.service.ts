import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private httpClient :HttpClient) {
    url = "http://localhost:8000/product/"
    getData(){
      return  this.httpClient.get(this.url)
    }
   }
}
