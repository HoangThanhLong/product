import {Component, OnInit} from '@angular/core';
import {ProductInterface} from './ProductInterface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {
  }

  showImage = true;
  widthImage = 100;
  public Product: ProductInterface[] = [{
    id: 1,
    name: 'Product1',
    price: 2000,
    image: 'assets/ProductImage/meo2.jpg'
  }, {
    id: 2,
    name: 'Product2',
    price: 3000,
    image: 'assets/ProductImage/meo4.jpg'
  }];
  productMess: any = this.Product;

  ngOnInit() {
  }

  click() {
    this.showImage = !this.showImage;
  }

  value_of_search(value) {
    if (value) {
      this.productMess = value;
    } else {
      this.productMess = this.Product;
    }
  }

  delete(id) {
    this.Product.splice(id, 1);
  }
}
