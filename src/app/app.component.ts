import { Component } from '@angular/core';
import { ProductService } from './service/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private productService: ProductService) {
  }

  onClickChangeStatusAllProduct(newStatus: any) {
    this.productService.changeAllStatusProducts(newStatus);
  }

}
