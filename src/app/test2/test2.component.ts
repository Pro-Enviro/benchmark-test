import { Component } from "@angular/core";
import { Product } from "../types/product.interface";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ProductCardComponent } from "../product-card/product-card.component";
@Component({
  selector: "app-test2",
  imports: [CommonModule, ProductCardComponent],
  templateUrl: "./test2.component.html",
  styleUrl: "./test2.component.css",
})
export class Test2Component {
  products: Product[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>("https://dummyjson.com/products").subscribe({
      next: (data) => {
        console.log(data);
        this.products = data.products;
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  }
}
