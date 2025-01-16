import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { MenubarComponent } from './menubar/menubar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'benchmark-test'
}
