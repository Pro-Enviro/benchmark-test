import { Component, Input } from "@angular/core";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { Tag } from "primeng/tag";

@Component({
  selector: "app-product-card",
  imports: [CardModule, ButtonModule, CommonModule, Tag],
  templateUrl: "./product-card.component.html",
  styleUrl: "./product-card.component.css",
})
export class ProductCardComponent {
  @Input() product: any;

  getSeverity(product: any) {
    if (product.stock <= 5) {
      return "danger";
    } else if (product.stock > 5 && product.stock <= 17) {
      return "warn";
    } else {
      return "success";
    }
  }

  getStockLabel(product: any): string {
    return `In stock: ${product.stock}`;
  }
}
