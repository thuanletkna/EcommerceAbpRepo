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
        path: 'san-pham',
        loadChildren: () => import('./pages/product/product.module').then(x => x.ProductModule),
        pathMatch: 'full'
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
