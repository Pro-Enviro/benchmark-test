import { Component } from "@angular/core";
import { Product } from "../types/product.interface";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-test2",
  imports: [],
  templateUrl: "./test2.component.html",
  styleUrl: "./test2.component.css",
})
export class Test2Component {
  products: Product[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>("https://dummyjson.com/products").subscribe((data) => {
      console.log(data);
    });
  }
}
