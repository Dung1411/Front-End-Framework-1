import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path: "product", component: ProductComponent},
  {path:"product/add", component:AddProductComponent},
  {path: "product/edit/:id", component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
