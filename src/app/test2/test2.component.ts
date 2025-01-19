import { ProductType } from "./../types/types";
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { DialogModule } from "primeng/dialog";
import { ProductCardComponent } from "../product-card/product-card.component";
import { FormsModule } from "@angular/forms";
import { Rating } from "primeng/rating";
import { ButtonModule } from "primeng/button";
import { ScrollPanelModule } from "primeng/scrollpanel";

@Component({
  selector: "app-test2",
  imports: [
    CommonModule,
    ProductCardComponent,
    DialogModule,
    FormsModule,
    Rating,
    ButtonModule,
    ScrollPanelModule,
  ],
  standalone: true,
  templateUrl: "./test2.component.html",
  styleUrl: "./test2.component.css",
})
export class Test2Component {
  private url = "https://dummyjson.com/products";
  constructor(private httpClient: HttpClient) {}

  products: ProductType[] = [];
  isLoading: boolean = true;
  visible4: boolean = false;
  clickedProduct: ProductType | null = null;
  value: number = 0;
  discountPrice: number = 0;

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.httpClient.get(this.url).subscribe((response: any) => {
      this.products = response.products;
      this.isLoading = false;
    });
  }

  showProductFullDescription(product: ProductType): void {
    this.visible4 = true;
    this.clickedProduct = product;
    this.value = Math.round(product.rating);
    this.discountPrice = Number(
      (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    );
  }

  dataFormatting(date: string): string {
    const newDate = new Date("2024-05-23T08:56:21.618Z");

    const formattedDate = newDate.toLocaleDateString("uk-UA");
    return formattedDate;
  }
}
