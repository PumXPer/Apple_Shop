import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from '../../componant/shop/shop.component';
import { Categories } from '../../model';
import { Observable, switchMap } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fake-shop-shop-page',
  standalone: true,
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
  imports: [CommonModule, ShopComponent],
})
export class ShopPageComponent {
  protected readonly data$: Observable<Categories[]>;

  constructor(
    dataService: CategoryService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.data$ = this.route.queryParams.pipe(
      switchMap(() => dataService.getCategoryList()),
    );
  }
}
