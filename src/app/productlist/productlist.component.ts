import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  providers: [ProductService]
})
export class ProductlistComponent implements OnInit {


  constructor(public router: Router, public list: ProductService) { }

  navproduct() {
    this.router.navigate(['/product'])
  }

  increase() {
    this.list.addquantity()
  }
  ngOnInit(): void {
  }

}
