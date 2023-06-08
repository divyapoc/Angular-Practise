import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productname = "soap";
  quantity = 5;
  price = 30;
  constructor() { }

  addquantity() {
    this.quantity++
  }
}
