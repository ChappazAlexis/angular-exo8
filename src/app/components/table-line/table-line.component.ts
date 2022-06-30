import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent implements OnInit {

  @Input() id!: string;
  @Input() name!: string;
  @Input() status!: string;

  constructor(private productService : ProductService ,private router: Router) { }

  ngOnInit(): void {
  }

  onClickChangeStatusProducts() {
    this.productService.changeStatusProducts(this.id);
  }

  onClickShowDetail() {
    this.router.navigate(['product', this.id]);
  }

}
