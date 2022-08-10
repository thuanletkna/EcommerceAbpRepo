import { Component, Injector, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { AppBaseComponent } from "src/shared/app-base.component";

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent extends AppBaseComponent implements OnChanges, OnInit {

  @Input()
  pageSize?: number;
  @Input()
  totalCount?: number;

  pageNumbers: {
    page?: number,
    text: string,
    class: string,
  }[] = [];
  
  totalPage!: number;
  showPaging = false;

  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(() => {
      this.buildPageNumbers();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.pageSize !== null
      && this.pageSize !== undefined
      && this.totalCount !== null
      && this.totalCount !== undefined
      && changes["totalCount"] !== null
      && changes["totalCount"] !== undefined) {

      if (changes["totalCount"].currentValue !== changes["totalCount"].previousValue) {
        this.buildPageNumbers();
      }
    }
    else {
      this.showPaging = false;
      this.pageNumbers = [];
    }
  }

  private buildPageNumbers() {
    this.pageNumbers = [];
    if (!this.totalCount || !this.pageSize) {
      return;
    }
    this.totalPage = Math.round(this.totalCount/this.pageSize + 0.4);
    this.showPaging = this.totalPage > 1;

    if (this.totalPage < 8) {

      for(let page = 1; page <= this.totalPage; page++) {
        this.pageNumbers.push({
          page: page,
          text: page.toString(),
          class: page == this.currentPage ? 'active' : ''
        });
      }

      return;
    }

    if (this.currentPage > 2) {
      this.pageNumbers.push({
        page: 1,
        text: '1',
        class: 1 == this.currentPage ? 'active' : ''
      });
    }

    if (this.currentPage > 3) {
      this.pageNumbers.push({
        text: '...',
        class: 'border-0'
      });
    }

    let page = this.currentPage > this.totalPage - 3 ? this.totalPage - 3 : this.currentPage - 1;

    for(;page <= this.currentPage; page++) {
      if (page > 0) {
        this.pageNumbers.push({
          page: page,
          text: page.toString(),
          class: page == this.currentPage ? 'active' : ''
        });
      }
    }

    page = this.currentPage + 1;
    let maxPage = this.currentPage + 2;
    if (this.currentPage < 3) maxPage = 5;

    while(page <= this.totalPage && page < maxPage) {
      this.pageNumbers.push({
        page: page,
        text: page.toString(),
        class: ''
      });
      page++;
    }

    if (this.currentPage < this.totalPage - 2) {
      this.pageNumbers.push({
        text: '...',
        class: 'border-0'
      });
    }

    if (this.currentPage < this.totalPage - 1) {
      this.pageNumbers.push({
        page: this.totalPage,
        text: this.totalPage.toString(),
        class: this.currentPage == this.totalPage ? "active" : ""
      });
    }
  }
}
