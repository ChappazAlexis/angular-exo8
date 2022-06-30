import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onClickChangeStatusAllProduct(newStatus: any) {
    this.productService.changeAllStatusProducts(newStatus);
  }

}
