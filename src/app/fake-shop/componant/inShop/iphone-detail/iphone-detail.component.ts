import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from 'src/app/fake-shop/model';
import { FormControl } from '@angular/forms';
import { CartService } from 'src/app/fake-shop/services/cart.service';

@Component({
  selector: 'fake-shop-iphone-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iphone-detail.component.html',
  styleUrls: ['./iphone-detail.component.scss'],
})
export class IphoneDetailComponent implements OnInit {
  @Input() data!: Products;

  @Output() itemSelected = new EventEmitter<Products>();

  myForm = new FormControl();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Property 'data' is required!`);
    }
  }

  protected select(data: Products): void {
    this.itemSelected.emit(data);
  }

  addToCart(product: Products): void {
    this.cartService.addItem(product);
    window.alert('Your product has been added to the cart!');
  }
}
