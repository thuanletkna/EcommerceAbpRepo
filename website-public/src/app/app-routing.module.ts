import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/shared/layout/main-layout.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule),
        pathMatch: 'full'
      },
      {
        path: 'danh-sach-san-pham',
        loadChildren: () => import('./pages/product/product-list-all/product-list-all.module').then(x => x.ProductListAllModule),
        pathMatch: 'full'
      },
      {
        path: 'san-pham',
        loadChildren: () => import('./pages/product/product.module').then(x => x.ProductModule),
        // pathMatch: 'full'
      },
      {
        path: 'chi-tiet-san-pham',
        loadChildren: () => import('./pages/product-detail/product-detail.module').then(x => x.ProductDetailModule),
        // pathMatch: 'full'
      },
      {
        path: 'bai-dang',
        loadChildren: () => import('./pages/blog/blog.module').then(x => x.BlogModule),
        // pathMatch: 'full'
      },
      {
        path: 'chi-tiet-bai-dang',
        loadChildren: () => import('./pages/blog/blog-detail/blog-detail.module').then(x => x.BlogDetailModule),
        // pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: '',
  //   component: BlankLayoutComponent,
  //   children: [
  //     {
  //       path: 'loi-server',
  //       loadChildren: () => import('./pages/server-error/server-error.module').then(x => x.ServerErrorModule),
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
