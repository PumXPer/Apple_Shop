import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../../componant/product-detail/product-detail.component';
import { Products, SearchData } from '../../model';
import { Observable, switchMap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fake-shop-product-detail-page',
  standalone: true,
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
  imports: [CommonModule, ProductDetailComponent],
})
export class ProductDetailPageComponent {
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
