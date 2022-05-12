import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  componentName : string = "Product Component";
  isStatus: boolean = false;
  productName: string = "";
  

  productList: IProduct[]=[
    {id: 1, name: "Product A" , price: 234, status: false},
    {id: 2, name: "Product B" , price: 345,status: true}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  onHandleClick(){
    this.isStatus = !this.isStatus;
  }
  onHandleDelete(id: number){
    this.productList = this.productList.filter(product => product.id !== id)
  }
}


