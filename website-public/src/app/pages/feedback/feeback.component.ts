import { Component, Injector, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AppBaseComponent } from 'src/shared/app-base.component';
import { CategoryDto } from 'src/shared/model/category.dto';
import { FeedBackDto } from 'src/shared/model/feedback/feedback.dto';
import { ProductFileDto } from 'src/shared/model/product-file/product-file.dto';
import { FeedBackService } from 'src/shared/services/feedback.service';
import { FileStorageService } from 'src/shared/services/file-storage.service';


@Component({
  templateUrl: './feeback.component.html',
})
export class FeedBackComponent extends AppBaseComponent implements OnInit {
  encapsulation: ViewEncapsulation.None | undefined;
  categories: CategoryDto[] = [];
  @Input() category: CategoryDto | undefined;
  productFile: ProductFileDto[]| undefined = [];
  feedbacks: FeedBackDto[] = [];
  

  
  constructor(
    protected override readonly injector: Injector,
    private readonly feedBackService: FeedBackService,
    private readonly fileStorageService: FileStorageService
  ) {
    super(injector);
  }
  get id() {
    return this.getParam('id');
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activatedRoute.queryParams.subscribe(() => {
      this.initData();
    });
  }
  

  initData() {
    forkJoin([
      this.feedBackService.getAllFeedBack(),
    ]).subscribe(
      ([
        feedbacks,
      ]) => {
        this.feedbacks = feedbacks;
      }
    );
   
  }
}
