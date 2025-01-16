import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

import { CategoryBadgeComponent } from '../category-badge/category-badge.component'

interface Product {
  id: number
  title: string
  description: string
  category: string
  stock: number
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CategoryBadgeComponent],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product
}
