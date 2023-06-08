import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  post = [
    {
      title: "Nature",
      decp: "Nature, in the broadest sense, is the physical world or universe. Nature can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.The word nature is borrowed from the Old French nature and is derived from the Latin word natura, or essential qualities, innate disposition, and in ancient times, literally meant birth",
      status: true
    },
    {
      title: "gravity",
      decp: "Gravity is the force by which a planet or other body draws objects toward its center. The force of gravity keeps all of the planets in orbit around the sun",
      status: true
    },
    {
      title: "PUBG",
      decp: "Climb to the top in PUBG MOBILE and fire at will. PUBG MOBILE is an original battle royale mobile game and one of the best mobile shooting games.",
      status: false
    }

  ]
  constructor(public prodservice: ProductService) { }

  ngOnInit(): void {
  }
  increase() {
    this.prodservice.addquantity()
  }
}
