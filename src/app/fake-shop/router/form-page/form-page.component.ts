import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Products } from '../../model';

@Component({
  selector: 'fake-shop-form-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  cartItems: Products[] = [];

  subtotal!: number;
  taxRate = 0.05;

  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl(''),
    address: new FormControl(''),
  });

  private fb: NonNullableFormBuilder;

  constructor(fb: FormBuilder, private cartService: CartService) {
    this.fb = fb.nonNullable;
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();

    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      tel: new FormControl(''),
      address: new FormControl(''),
    });

    this.subtotal = this.calculateSubtotal();
  }

  calculateSubtotal(): number {
    let subtotal = 0;

    for (const item of this.cartItems) {
      subtotal += item.price * item.qty;
    }

    return subtotal;
  }

  calculateTax(): number {
    return this.subtotal * this.taxRate;
  }

  calculateTotal(): number {
    return this.subtotal + this.calculateTax();
  }

  printInvoice(): void {
    console.log(this.myForm.value);
    window.print();
  }
}
