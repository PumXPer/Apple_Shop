import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../componant/home/home.component';

@Component({
  selector: 'fake-shop-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [CommonModule, HomeComponent],
})
export class HomePageComponent {}
