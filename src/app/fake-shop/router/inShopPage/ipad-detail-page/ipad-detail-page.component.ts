import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpadDetailComponent } from '../../../componant/inShop/ipad-detail/ipad-detail.component';
import { Products, SearchData } from 'src/app/fake-shop/model';
import { Observable, switchMap } from 'rxjs';
import { ProductService } from 'src/app/fake-shop/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fake-shop-ipad-detail-page',
  standalone: true,
  templateUrl: './ipad-detail-page.component.html',
  styleUrls: ['./ipad-detail-page.component.scss'],
  imports: [CommonModule, IpadDetailComponent],
})
export class IpadDetailPageComponent {
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
