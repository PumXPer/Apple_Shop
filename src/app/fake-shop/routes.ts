import { IphoneDetailPageComponent } from './router/inShopPage/iphone-detail-page/iphone-detail-page.component';
import { MacListPageComponent } from './router/inShopPage/mac-list-page/mac-list-page.component';
import { IpadListPageComponent } from './router/inShopPage/ipad-list-page/ipad-list-page.component';
import { FormPageComponent } from './router/form-page/form-page.component';
import { ProductDetailPageComponent } from './router/product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from './router/product-list-page/product-list-page.component';
import { CartPageComponent } from './router/cart-page/cart-page.component';
import { Route } from '@angular/router';
import { FakeShopComponent } from './router/fake-shop/fake-shop.component';
import { HomePageComponent } from './router/home-page/home-page.component';
import { ShopPageComponent } from './router/shop-page/shop-page.component';
import { IphoneListPageComponent } from './router/inShopPage/iphone-list-page/iphone-list-page.component';
import { IpadDetailPageComponent } from './router/inShopPage/ipad-detail-page/ipad-detail-page.component';
import { MacDetailPageComponent } from './router/inShopPage/mac-detail-page/mac-detail-page.component';

// import { IphoneDetailComponent } from './componant/iphone-detail/iphone-detail.component';

export const routes: Route[] = [
  {
    path: '',
    component: FakeShopComponent,
    children: [
      { path: '', redirectTo: 'shop', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'shop', component: ShopPageComponent },
      { path: 'product', component: ProductListPageComponent },
      { path: 'product/:id', component: ProductDetailPageComponent },
      { path: 'iphone', component: IphoneListPageComponent },
      { path: 'iphone/:id', component: IphoneDetailPageComponent },
      { path: 'ipad', component: IpadListPageComponent },
      { path: 'ipad/:id', component: IpadDetailPageComponent },
      { path: 'mac', component: MacListPageComponent },
      { path: 'mac/:id', component: MacDetailPageComponent },
      {
        path: 'cart',
        component: CartPageComponent,
      },
      { path: 'form', component: FormPageComponent },
    ],
  },
];
