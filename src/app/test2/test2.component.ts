import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

import { ProductCardComponent } from '../product-card/product-card.component'

interface Product {
  id: number
  title: string
  description: string
  category: string
  stock: number
}

interface ProductResponse {
  products: Product[]
}

@Component({
  selector: 'app-test2',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './test2.component.html',
  standalone: true,
})
export class Test2Component implements OnInit {
  products: Product[] = []
  isLoading = true
  error: string | null = null

  constructor(
    private titleService: Title,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Test 2 ✅ | Benchmark test')
    this.fetchProducts()
  }

  private fetchProducts() {
    this.http.get<ProductResponse>('https://dummyjson.com/products').subscribe({
      next: data => {
        this.products = data.products
        this.isLoading = false
      },
      error: error => {
        this.error = 'Failed to load products'
        this.isLoading = false
        console.error('Error fetching products:', error)
      },
    })
  }
}
