import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";

@Component({
  selector: "app-test1",
  standalone: true,
  imports: [ButtonModule, DialogModule],
  styleUrl: "./test1.component.css",
  templateUrl: "./test1.component.html",
})
export class Test1Component {
  intro: string = "Add the PrimeNG library to your project.";

  visible: boolean = false;

  showDialog() {
    console.log(this.visible);
    this.visible = true;
  }
}
