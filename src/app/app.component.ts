import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazing-animal-paintings';

  constructor(private readonly productService: ProductService) {}
}
