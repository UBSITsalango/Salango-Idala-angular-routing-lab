import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule, NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  imports: [NgClass, NgForOf, NgIf, CommonModule, FormsModule]
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    category: '',
    price: 0,
    description: '',
    quantity: 0,
    imageUrl: '',
    isAvailable: true,
    rating: 0
  };
  isEditMode = false;
  isSubmitting = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.isEditMode = true;
      this.productService.getProduct(Number(productId)).subscribe((product: Product | undefined) => {
        if (product) {
          this.product = product;
        }
      });
    }
  }

  onSubmit(): void {
    this.isSubmitting = true;

    if (this.isEditMode) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
