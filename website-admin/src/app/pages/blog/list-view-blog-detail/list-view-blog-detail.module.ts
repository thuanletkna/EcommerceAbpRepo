import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { BlogDetailViewListComponent } from "./list-view-blog-detail.component";

@NgModule({
    declarations: [BlogDetailViewListComponent],
    imports: [SharedModule]
})
export class BlogDetailViewListModule {}