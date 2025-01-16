import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Test1Component } from "./test1/test1.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CommonModule, Test1Component],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "benchmark-test";
  intro: string = "create a menu to display the test1 and test2 components";

  isMenuOpen: boolean = false;
  isTask1Visible: boolean = false;
  isHomeComponent: boolean = true;

  onMenuBtnClick(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  showTask1(): void {
    this.isTask1Visible = true;
    this.isMenuOpen = !this.isMenuOpen;
    this.isHomeComponent = !this.isHomeComponent;
  }

  hideTasks(): void {
    this.isTask1Visible = false;
    this.isMenuOpen = !this.isMenuOpen;
    this.isHomeComponent = !this.isHomeComponent;
  }
}
