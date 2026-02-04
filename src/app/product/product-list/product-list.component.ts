import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {


  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((geholteProduktliste) => {
      this.products = geholteProduktliste;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe();
  }

}
