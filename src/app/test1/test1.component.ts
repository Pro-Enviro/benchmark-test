import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { FormsModule } from "@angular/forms";
import { Rating } from "primeng/rating";
import { FieldsetModule } from "primeng/fieldset";

@Component({
  selector: "app-test1",
  standalone: true,
  imports: [ButtonModule, DialogModule, FormsModule, Rating, FieldsetModule],
  styleUrl: "./test1.component.css",
  templateUrl: "./test1.component.html",
})
export class Test1Component {
  intro: string = "Add the PrimeNG library to your project.";
  responseText: string = "";

  visible: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;

  value!: number;

  showDialog(): void {
    this.visible = true;
  }

  showNextDialog(): void {
    this.visible2 = true;
  }

  showResponse(): void {
    this.visible2 = false;
    this.visible3 = true;
    if (this.value <= 3) {
      this.responseText = "Sorry to hear that! 😔";
    } else {
      this.responseText = "Glad you like it! 😊";
    }
  }

  resetRating(): void {
    this.value = 0;
  }
}
