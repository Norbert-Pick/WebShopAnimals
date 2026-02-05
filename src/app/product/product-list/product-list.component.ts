import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
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
    MatInputModule,
    CommonModule,
    CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackbar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((geholteProduktliste) => {
      this.products = geholteProduktliste;
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
          panelClass: ['app-snackbar-top-left', 'app-snackbar-text-14']
        },);
      }
    });
  };

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();
    this this.filteredProducts = this.products.filter(
        (product: product.n) => {})

      const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.productService.getProducts().subscribe((geholteProduktliste) => {
      this.products = geholteProduktliste.filter(product =>
        product.name.toLowerCase().includes(filterValue) ||
        product.description.toLowerCase().includes(filterValue)
      );
    });
}
