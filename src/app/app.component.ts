import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "benchmark-test";
  intro: string = "create a menu to display the test1 and test2 components";

  isMenuOpen: boolean = false;

  onMenuBtnClick(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
