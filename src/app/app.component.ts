import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "benchmark-test";
  intro: string = "create a menu to display the test1 and test2 components";
}
