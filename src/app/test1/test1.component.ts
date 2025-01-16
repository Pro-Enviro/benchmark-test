import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroCheckCircle } from '@ng-icons/heroicons/outline'

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({ heroCheckCircle })],
  templateUrl: './test1.component.html',
})
export class Test1Component implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Test 1 ✅ | Benchmark test')
  }
}
