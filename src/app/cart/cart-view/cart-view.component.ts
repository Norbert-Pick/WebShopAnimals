import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Product } from '../../models/product';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart-view',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css',
})
export class CartViewComponent implements OnInit {
  cartItems : Product[] = [];

  constructor(private cartService: CartService) {
   
  }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((data) => {
      this.cartItems = data;
    });
  }


}
