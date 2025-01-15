import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../types/product.interface";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h3>{{ product.title }}</h3>
    </div>
  `,
  styles: [
    `
      .product-card {
        border: 1px solid #ddd;
        padding: 15px;
        margin: 10px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class ProductCardComponent {
  @Input() product!: Product;
}
