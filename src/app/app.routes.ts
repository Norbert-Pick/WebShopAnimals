import { Routes } from '@angular/router';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { ProductListComponent } from './product/product-list/product-list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'products', component: ProductListComponent},
    {path: 'cart', component: CartViewComponent}
    
];
