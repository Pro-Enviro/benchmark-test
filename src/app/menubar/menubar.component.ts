import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-menubar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menubar.component.html',
})
export class MenubarComponent {}
