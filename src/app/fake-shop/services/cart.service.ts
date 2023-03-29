import { Injectable } from '@angular/core';
import { Products } from '../model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  items: Products[] = [];

  addItem(item: Products): void {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // getItems() {
  //   return this.items;
  // }
  // Get the cart data from localStorage

  getCartItems() {
    const json = localStorage.getItem('cartItems');

    if (json) {
      return JSON.parse(json);
    }
  }

  removeItem(index: number): void {
    const cartItems = this.getCartItems();
    // cartItems = cartItems.filter((item: { id: number }) => item.id !== id);
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  getItemCount() {
    return this.items.length;
  }
}
