import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products:Array<Product>

  constructor() { }

  ngOnInit() {
      this.products = [
          new Product(1,'第一个商品',99,5,"这里是商品的描述~~~",["电子读物"]),
          new Product(2,'第一个商品',199,3.5,"这里是商品的描述~~~",["电子读物"]),
          new Product(3,'第一个商品',299,4.5,"这里是商品的描述~~~",["电子读物"]),
          new Product(4,'第一个商品',99,4,"这里是商品的描述~~~",["电子读物"]),
          new Product(5,'第一个商品',699,3,"这里是商品的描述~~~",["电子读物"]),
      ]
  }

}

export class Product {
    constructor(
        public id:number,
        public title:string,
        public price:number,
        public rating:number,
        public desc:string,
        public categories:Array<string>
    ) { }
}
