import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ManagerProductComponent } from './pages/manager-product/manager-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProductsComponent,
    AboutComponent,
    ProductDetailComponent,
    HomePageComponent,
    ManagerProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
