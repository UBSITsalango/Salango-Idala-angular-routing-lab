import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
  @Injectable({
    providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Smartphone X',
      description: 'Latest smartphone with amazing features',
      price: 799.99,
      imageUrl: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isAvailable: true,
      category: 'Electronics',
      rating: 4.5,
      quantity: 10
    },
    {
      id: 2,
      name: 'Laptop Pro',
      description: 'Powerful laptop for professionals',
      price: 1299.99,
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isAvailable: true,
      category: 'Electronics',
      rating: 4.8,
      quantity: 5
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      description: 'Premium sound quality with noise cancellation',
      price: 249.99,
      imageUrl: 'https://images.unsplash.com/photo-1481207801830-97f0f9a1337e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isAvailable: false,
      category: 'Audio',
      rating: 4.2,
      quantity: 0
    },
    {
      id: 4,
      name: 'Smart Watch',
      description: 'Track your fitness and stay connected',
      price: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1617043983671-adaadcaa2460?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isAvailable: true,
      category: 'Wearables',
      rating: 4.0,
      quantity: 15
    }
  ];
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
  getProduct(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
  addProduct(product: Product): Observable<Product> {
    // Generate a new ID (in a real app, the backend would do this)
    const newId = Math.max(...this.products.map(p => p.id)) + 1;
    const newProduct = { ...product, id: newId };
    this.products.push(newProduct);
    return of(newProduct);
  }
  updateProduct(product: Product): Observable<Product> {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = { ...product };
      return of(this.products[index]);
    }
    return of(product); // In a real app, you might want to handle this case differently
  }
  deleteProduct(id: number): Observable<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}