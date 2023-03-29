import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IphoneDetailComponent } from '../../../componant/inShop/iphone-detail/iphone-detail.component';
import { Products, SearchData } from 'src/app/fake-shop/model';
import { Observable, switchMap } from 'rxjs';
import { ProductService } from 'src/app/fake-shop/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fake-shop-iphone-detail-page',
  standalone: true,
  templateUrl: './iphone-detail-page.component.html',
  styleUrls: ['./iphone-detail-page.component.scss'],
  imports: [CommonModule, IphoneDetailComponent],
})
export class IphoneDetailPageComponent {
  protected readonly data$: Observable<Products>;

  protected searchData?: SearchData;

  constructor(
    private readonly dataService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.searchData = this.route.snapshot.queryParams;
    this.data$ = this.route.params.pipe(
      switchMap((params) => this.dataService.getProductById(params['id'])),
    );
  }

  doBack(): void {
    history.back();
  }
}
