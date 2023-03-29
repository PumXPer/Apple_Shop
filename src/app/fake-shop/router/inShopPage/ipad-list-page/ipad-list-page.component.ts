import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpadListComponent } from '../../../componant/inShop/ipad-list/ipad-list.component';
import { Products, SearchData } from '../../../model';
import { Observable, switchMap } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fake-shop-ipad-list-page',
  standalone: true,
  templateUrl: './ipad-list-page.component.html',
  styleUrls: ['./ipad-list-page.component.scss'],
  imports: [CommonModule, IpadListComponent],
})
export class IpadListPageComponent {
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
