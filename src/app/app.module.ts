import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableLineComponent } from './components/table-line/table-line.component';
import { ProductService } from './service/product/product.service';
import { HeaderComponent } from './components/header/header.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ProductsViewComponent } from './views/products-view/products-view.component';
import { SingleProductViewComponent } from './views/single-product-view/single-product-view.component';
import { AuthService } from './service/auth/auth.service';
import { ErrorViewComponent } from './views/error-view/error-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableLineComponent,
    HeaderComponent,
    AuthViewComponent,
    ProductsViewComponent,
    SingleProductViewComponent,
    ErrorViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
