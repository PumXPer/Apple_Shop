import { Router, RouterModule } from '@angular/router';
import { Products } from './../../model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'fake-shop-cart-page',
  standalone: true,
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class CartPageComponent implements OnInit {
  constructor(private cartService: CartService, private router: Router) {}

  cartItems: Products[] = [];
  // removeFromCart(productId: number): void {
  //   this.cartService.removeFromCart(productId);
  //   this.cartItems = this.cartService.getCartItems();
  // }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cartItems) {
      totalPrice += item.price * item.qty;
    }
    return totalPrice;
  }

  goToFormPage() {
    this.router.navigate(['/cart/form']);
  }
}
