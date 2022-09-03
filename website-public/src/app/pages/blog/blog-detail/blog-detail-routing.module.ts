import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail.component';

const routes: Routes = [
    {
        path: ':slug',
        component: BlogDetailComponent,
    },
    // {
    //     path: '',
    //     component: ProductDetailComponent,
    // },
    {
        path: 'preview/:uuid',
        component: BlogDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogDetailRoutingModule {}
