import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CommonModule,
    CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortOrder: string = "";

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackbar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((geholteProduktliste) => {
      this.products = geholteProduktliste;
      this.filteredProducts = geholteProduktliste;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        console.log(`Produkt mit id ${product.id} wurde zum Warenkorb hinzugefügt.`);
        this.snackbar.open('Produkt wurde zum Warenkorb hinzugefügt.', '', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['app-snackbar-top-right', 'app-snackbar-text-14']
        },);
      }
    });
  };

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.trim().toLowerCase();
    this.filteredProducts = this.products.filter(
        product => product.name.toLowerCase().includes(searchTerm) ||
            product.price.toString().toLowerCase().startsWith(searchTerm)
    );
    this.sortProducts((this.sortOrder));
    };

  sortProducts(sortBy: string): void {
      this.sortOrder = sortBy;
      if (this.sortOrder === 'priceLowHigh') {
        this.filteredProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === 'priceHighLow') {
          this.filteredProducts.sort((a, b) => b.price - a.price);
      } else if (this.sortOrder === 'nameHighLow') {
          this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortOrder === 'nameLowHigh') {
          this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      }
  }
}
