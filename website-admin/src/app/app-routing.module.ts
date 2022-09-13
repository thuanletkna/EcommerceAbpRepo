import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './shared/layout/blank-layout.component';
import { MainLayoutComponent } from './shared/layout/main-layout.component';

const routes: Routes = [
  {
    component: MainLayoutComponent,
    path: '',
    children: [
        {
            path: 'category',
            loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule),
            canActivate: [AuthGuard],
                // data: {
                //     requiredPolicy: 'EcommerceSourceAbpPermissions.Category',
                // },
        },
        {
          path: 'products',
          loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
          canActivate: [AuthGuard],
              // data: {
              //     requiredPolicy: 'EcommerceSourceAbpPermissions.Category',
              // },
      },
      {
        path: 'category-product',
        loadChildren: () => import('./pages/product/category-product/category-product.module').then(m => m.CategoryProductModule),
        canActivate: [AuthGuard],
            // data: {
            //     requiredPolicy: 'EcommerceSourceAbpPermissions.Category',
            // },
    },
    {
        path: 'category-blog',
        loadChildren: () => import('./pages/blog/category-blog/category-blog.module').then(m => m.CategoryBlogModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'blogs',
        loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule),
        canActivate: [AuthGuard],
      },
    {
      path: 'product-property',
      loadChildren: () =>
        import('./pages/product/product-property/product-property.module').then(m => m.ProductPropertyModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'contact',
      loadChildren: () =>
        import('./pages/contact/contact.module').then(m => m.ContactModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'image-setting',
      loadChildren: () => import('./pages/image-setting/image-setting.module').then(m => m.ImageSettingModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'trade-mark',
      loadChildren: () =>
        import('./pages/product/trade-mark/trade-mark.module').then(m => m.TradeMarkModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'feedback',
      loadChildren: () =>
        import('./pages/feedback/feeback.module').then(m => m.FeedBackModule),
      canActivate: [AuthGuard],
    },
        {
          path: 'account',
          loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
        },
        {
          path: 'identity',
          loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
        },
        {
          path: 'identity/roles',
          loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
          canActivate: [AuthGuard],
        },
        {
          path: 'tenant-management',
          loadChildren: () =>
            import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
        },
        {
          path: 'setting-management',
          loadChildren: () =>
            import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
        },
        {
          path: '',
          pathMatch: 'full',
          loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
          canActivate: [AuthGuard],
        },
    ],
},
{
  path: 'account',
  component: BlankLayoutComponent,
  loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
},
{
  component: BlankLayoutComponent,
  path: '',
  children: [
    // {
    //   path: 'account',
    //   loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
    // },
    // {
    //   path: 'identity',
    //   loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
    // },
    // {
    //   path: 'identity/roles',
    //   loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
    //   canActivate: [AuthGuard],
    // },
    // {
    //   path: 'tenant-management',
    //   loadChildren: () =>
    //     import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
    // },
    // {
    //   path: 'setting-management',
    //   loadChildren: () =>
    //     import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
    // },
  ],
},
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  // },
  // {
  //   path: 'account',
  //   loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  // },
  // {
  //   path: 'identity',
  //   loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  // },
  // {
  //   path: 'tenant-management',
  //   loadChildren: () =>
  //     import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  // },
  // {
  //   path: 'setting-management',
  //   loadChildren: () =>
  //     import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  // },
  // {
  //   path: 'category',
  //   // canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
