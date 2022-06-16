import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products!: IProduct[]
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getProductList()
  }
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      console.log(data);
      this.products = data
    }
    )
  }
  onClickRemoveProduct(id:number) {
    const action = window.confirm('Ban co muon xoa khong')
    if(action){
      this.productService.ProductRemove(id).subscribe(data => {
        this.products = this.products.filter(item => item.id !== id)
      })
    }

    
  }

}
