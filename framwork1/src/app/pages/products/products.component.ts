import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  componentName : string = "Product Component";
  isStatus: boolean = false;
  isProduct!: IProduct 
  productName: string = "";
  @Input() data!: IProduct[]
  

 
  
  constructor() { }

  ngOnInit(): void {
  }
  onHandleClick(){
    this.isStatus = !this.isStatus;
  }
  onHandleDelete(id: number){
    this.data = this.data.filter(product => product.id !== id)
  }
  onHandleDetail(product : IProduct){
    this.isProduct = product;
  }
}


