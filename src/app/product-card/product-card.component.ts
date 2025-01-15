import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../types/product.interface";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./product-card.component.html",
  styleUrl: "./product-card.component.css",
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor() {}

  ngOnInit() {}
}
