import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  products! : Array<any>;

  constructor(private productService : ProductService) {

  }

  ngOnInit(): void {
    this.products = this.productService.products;
  }

}
