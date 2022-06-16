import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: IProduct = {
    name: "",
    price: 0,
    img: ""
  }


  constructor(
    private productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    if (id) {
      this.productService.getProduct(id).subscribe(data => {
        this.product = data
      }
      )
    }
  }
  onSubmit(){
    console.log("1");
    const id = this.activeRoute.snapshot.paramMap.get('id')
    if(id){
      this.productService.ProductUpdate(this.product).subscribe(data => {
        const confirm = alert("Cap nhap thanh cong!")
        confirm
        this.router.navigateByUrl('/product')
      })
    }else{
      this.productService.ProductAdd(this.product).subscribe(data => {
        const confirm = alert("Them sp thanh cong!")
        confirm
        this.router.navigateByUrl('/product')
      })
    }
  }
  

 

}
