import { Component } from '@angular/core';
import { IProduct } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'framwork1';
  productList: IProduct[]=[
    {id: 1, name: "Product A" , price: 234, status: false},
    {id: 2, name: "Product B" , price: 345,status: true}
  ];
}
