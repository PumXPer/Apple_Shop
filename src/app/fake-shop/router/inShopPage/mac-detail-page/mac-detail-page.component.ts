import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacDetailComponent } from '../../../componant/inShop/mac-detail/mac-detail.component';
import { Products, SearchData } from 'src/app/fake-shop/model';
import { Observable, switchMap } from 'rxjs';
import { ProductService } from 'src/app/fake-shop/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fake-shop-mac-detail-page',
  standalone: true,
  templateUrl: './mac-detail-page.component.html',
  styleUrls: ['./mac-detail-page.component.scss'],
  imports: [CommonModule, MacDetailComponent],
})
export class MacDetailPageComponent {
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
