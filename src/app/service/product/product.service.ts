import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  onClickChangeStatusProducts(status: string) {
    throw new Error('Method not implemented.');
  }

  products!: Array<any>;

  constructor() {
    this.products = [];

    const productsName = ["Tomates", "Pommes", "Poires", "Bananes"];

    for(let i = 0; i < productsName.length; i++) {

      this.products.push ({
        id: i,
        name: productsName[i],
        status: 'stock'
      });
    }
   }

   getProductInfos(productId: any) {
    for(let product of this.products) {
      if(product.id === productId) {
        return product;
      }
    }
   }

   changeAllStatusProducts(newStatus: any) {
    this.products.forEach(product => {
      product.status = newStatus
    });
   }

   changeStatusProducts(productId: any,){
    for(let i = 0; i < this.products.length; i ++) {
      if(this.products[i].id === productId) {
        this.products[i].status = this.products[i].status === 'stock' ? 'rupture' : 'stock';
        
      }
    }
   }
}
