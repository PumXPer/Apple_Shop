import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fake-shop',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fake-shop.component.html',
  styleUrls: ['./fake-shop.component.scss'],
})
export class FakeShopComponent {}
