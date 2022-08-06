import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CreateEditBlogDetailComponent } from "./create-edit-blog-detail.component";

@NgModule({
    declarations: [CreateEditBlogDetailComponent],
    imports: [SharedModule]
})
export class BlogDetailModule {}