import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

import { Test1Component } from "./test1/test1.component";
import { Test2Component } from "./test2/test2.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CommonModule, Test1Component, Test2Component],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "benchmark-test";
  intro: string = "create a menu to display the test1 and test2 components";

  isMenuOpen: boolean = false;
  isTask1Visible: boolean = false;
  isTask2Visible: boolean = false;
  isHomeComponent: boolean = true;

  onMenuBtnClick(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  showTask1(): void {
    this.isTask1Visible = true;
    this.isTask2Visible = false;
    this.isMenuOpen = !this.isMenuOpen;
    this.isHomeComponent = false;
  }

  showTask2(): void {
    this.isTask2Visible = true;
    this.isTask1Visible = false;
    this.isMenuOpen = !this.isMenuOpen;
    this.isHomeComponent = false;
  }

  hideTasks(): void {
    this.isTask1Visible = false;
    this.isTask2Visible = false;
    this.isMenuOpen = !this.isMenuOpen;
    this.isHomeComponent = !this.isHomeComponent;
  }
}
