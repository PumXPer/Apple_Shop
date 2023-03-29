import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products, SearchData } from '../../../model';
import { Observable, switchMap } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IphoneListComponent } from '../../../componant/inShop/iphone-list/iphone-list.component';

@Component({
  selector: 'fake-shop-iphone-list-page',
  standalone: true,
  templateUrl: './iphone-list-page.component.html',
  styleUrls: ['./iphone-list-page.component.scss'],
  imports: [CommonModule, IphoneListComponent],
})
export class IphoneListPageComponent {
  protected readonly data$: Observable<Products[]>;

  constructor(
    dataService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.data$ = this.route.queryParams.pipe(
      switchMap((params) => dataService.getProductList(params)),
    );
  }

  protected onItemSelect(item: Products): void {
    const paths = item.id;
    console.log(paths);
    const id = paths.toString();
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }

  protected search(searchData: SearchData): void {
    this.router.navigate([], {
      queryParams: searchData,
    });
    console.log('aom', searchData);
  }
}
