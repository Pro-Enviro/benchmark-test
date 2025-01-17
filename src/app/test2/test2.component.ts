import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-test2",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./test2.component.html",
  styleUrl: "./test2.component.css",
})
export class Test2Component {
  private url = "https://dummyjson.com/products";
  constructor(private httpClient: HttpClient) {}

  products: any[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.httpClient.get(this.url).subscribe((response: any) => {
      this.products = response.products;
      this.isLoading = false;
      console.log(this.products);
    });
  }
}
