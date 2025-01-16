import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

type Categories = 'beauty' | 'furniture' | 'fragrances' | 'groceries'

@Component({
  selector: 'app-category-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="getColorClasses()" class="px-3 py-0.5 rounded-full transition-colors duration-300">
      {{ category.charAt(0).toUpperCase() + category.slice(1) }}
    </span>
  `,
})
export class CategoryBadgeComponent {
  @Input({ required: true }) category!: string

  private readonly categoryColourClasses: Record<Categories, string> = {
    beauty: 'bg-blue-50 group-hover:bg-blue-100 text-blue-500 group-hover:text-blue-600',
    furniture: 'bg-orange-50 group-hover:bg-orange-100 text-orange-500 group-hover:text-orange-600',
    fragrances: 'bg-purple-50 group-hover:bg-purple-100 text-purple-500 group-hover:text-purple-600',
    groceries: 'bg-pink-50 group-hover:bg-pink-100 text-pink-500 group-hover:text-pink-600',
  }

  getColorClasses(): string {
    return this.categoryColourClasses[this.category as Categories] || this.categoryColourClasses.beauty
  }
}
