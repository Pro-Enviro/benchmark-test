import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
@Component({
  selector: "app-product-details",
  imports: [RouterLink, CommonModule],
  templateUrl: "./product-details.component.html",
  styleUrl: "./product-details.component.css",
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  currentImage: string = "";
  Math = Math;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      this.http
        .get<any>(`https://dummyjson.com/products/${id}`)
        .subscribe((data) => {
          this.product = data;
          this.currentImage = data.images[0];
        });
    });
  }
}
