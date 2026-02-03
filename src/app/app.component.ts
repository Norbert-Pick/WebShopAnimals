import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product/product.service';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatAnchor } from "@angular/material/button";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar,
    MatToolbarRow,
    MatAnchor,
    MatButtonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazing-animal-paintings';

  constructor(private readonly productService: ProductService) {}
}
