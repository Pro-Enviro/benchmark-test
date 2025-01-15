import { Routes } from "@angular/router";
import { Test1Component } from "./test1/test1.component";
import { Test2Component } from "./test2/test2.component";
import { ChallengesComponent } from "./challenges/challenges.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

export const routes: Routes = [
  { path: "test1", component: Test1Component },
  { path: "test2", component: Test2Component },
  { path: "product/:id", component: ProductDetailsComponent },
  { path: "challenges", component: ChallengesComponent },
  { path: "", redirectTo: "/test2", pathMatch: "full" },
];
