import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';
import {Product} from "../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
 products :Array<Product> =[];
    constructor(private productService:ProductService){}



 ngOnInit(){
   this.getProducts;
  }

getProducts(){
  this.productService.getProducts()
  .subscribe({
  next : data => {
     this.products = data
  },
  error : err =>{
    console.log(err)
  }

  })
}


handleCheckProduct(product: Product){
  this.productService.checkProducts(product).subscribe({

    next : updatedProduct =>{

     this.getProducts();
    }
  })
 
}

handleDelete(product:Product){

  if(confirm("etes vous sure de vouloire supprimer!"))
  this.productService.deleteProduct(product).subscribe({
    next:value =>{
      this.getProducts();
      this.products = this.products.filter(p =>p.id!=product.id);
    }
  })


}




}
