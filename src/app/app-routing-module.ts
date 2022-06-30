import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './service/auth-guard/auth-guard.service';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ProductsViewComponent } from './views/products-view/products-view.component';
import { SingleProductViewComponent } from './views/single-product-view/single-product-view.component';

const routes : Routes = [
    { path: 'auth', component: AuthViewComponent},
    { path: 'products', canActivate: [AuthGuardService], component: ProductsViewComponent},
    { path: 'product/:id', canActivate: [AuthGuardService], component: SingleProductViewComponent},
    { path: '', canActivate: [AuthGuardService], component:  ProductsViewComponent},
    { path: 'not-found', component:  ProductsViewComponent},
    { path: '**', redirectTo: 'not-found'},
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }