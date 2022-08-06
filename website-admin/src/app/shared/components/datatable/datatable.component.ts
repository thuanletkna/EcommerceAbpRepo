import { PagedResultDto } from '@abp/ng.core';
import { AfterContentInit, AfterViewInit, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, Injector, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { AppBaseComponent } from '../../app-base.component';
import { AppConsts } from '../../consts/app-consts';
import { NatsStatus } from '../../enums';

@Component({
  selector: 'datatable[option]',
  templateUrl: './datatable.component.html',
})
export class DatatableComponent extends AppBaseComponent implements AfterViewInit, OnInit, OnChanges, AfterContentInit {
  get displayedColumns(): string[] {
    return this._displayColumns;
  }

  get hasData(): boolean {
    return this.dataSource !== undefined && this.dataSource?.totalCount !== 0;
  }

  get width(): number {
    let width = 0;
    this.option.columns
      .filter(x => this.displayedColumns.findIndex(c => c === x.name) !== -1)
      .forEach(x => {
        width += x.width || 200;
      });

    return width;
  }

  get pageIndex(): number {
    return this._paginator.pageIndex;
  }

  get pageSize(): number {
    return this._paginator.pageSize;
  }

  dataSource: any;
  filterObject: any = {};

  @Input()
  source?: any[];

  @Input()
  option: DatatableOption<any>;

  @ViewChild(MatPaginator) private _paginator: MatPaginator;
  @ViewChild(MatSort) private _sort: MatSort;
  private _displayColumns: string[] = [];

  private get _filter(): any {
    // TODO: get input from filters
    return {
      maxResultCount: this._paginator.pageSize,
      skipCount: this._paginator.pageIndex * this._paginator.pageSize,
      sorting: this._sort.active ? this._sort.active + ' ' + this._sort.direction : '',
      ...this.filterObject,
    };
  }

  private get _tableName(): string {
    return this.option.tableName || document.location.pathname;
  }

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    if (this.option)
      this.dataSource = this.option.functionData ? [] : new MatTableDataSource<any>([]);
  }

  ngAfterViewInit(): void {
    if (this.option.defaultSorting?.field) {
      this._sort.active = this.option.defaultSorting.field;
      this._sort.direction = this.option.defaultSorting.direction || 'asc';
    }

    if (this.option.functionData) {
      this._sort.sortChange.subscribe(() => (this._paginator.pageIndex = 0));
      merge(this._sort.sortChange, this._paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            return this._getDataForTable();
          })
        )
        .subscribe(result => {
          this.dataSource = result?.items || [];
          this._paginator.length = result?.totalCount || 0;
        });
    }
    else {
      this.dataSource.data = this.source || [];
      this.dataSource.paginator = this._paginator;
      this.dataSource.sort = this._sort;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataSource && changes.source && changes.source.currentValue !== changes.source.previousValue) {
      this.dataSource.data = this.source || [];
    }
  }

  ngAfterContentInit(): void{
    this._getDisplayColumns();
  }

  refresh(stayCurrentPage: boolean = false): void {
    if (this.option.functionData) {
      if (!stayCurrentPage) {
        this._paginator.pageIndex = 0;
      }
      
      this._getDataForTable().subscribe(result => {
        this.dataSource = result?.items;
        this._paginator.length = result?.totalCount || 0;
      });
    }
    else {
      if (!this.source) {
        this.source = [];
      }

      let totalPage = this.source.length / this._paginator.pageSize;

      if (this.source.length % this._paginator.pageSize !== 0) {
        totalPage++;
      }

      if (totalPage - 1 < this._paginator.pageIndex) {
        this._paginator.pageIndex = totalPage - 1;
      }
      this.dataSource.data = this.source;
    }
  }

  getColsDisplay(): DatatableColumn<any>[] {
    return this.option.columns.filter(x => this.displayedColumns.indexOf(x.name) > -1);
  }

  getColSortable(col: DatatableColumn<any>): string {
    if (col.dataType === 'select' || col.dataType === 'viewphoto') {
      return null;
    }
    let sortable = this.option.sortable;
    if (col.sortable !== null && col.sortable !== undefined) {
      sortable = col.sortable;
    }

    if (sortable) {
      return col.name;
    }

    return null;
  }

  getColWidth(col: DatatableColumn<any>) {
    if (col.dataType === 'select') {
      return { width: '20px' };
    }
    if (!col.width) {
      return {};
    }

    return { width: col.width + 'px' };
  }

  getCssClass(col: DatatableColumn<any>) {
    if (col.cssClass === '' || col.cssClass == null || col.cssClass == undefined) {
      return '';
    } else {
      return col.cssClass;
    }
  }


  getDataField(dataRow: any, col: DatatableColumn<any>): any {
    if (col.customRender) {
      return col.customRender(dataRow);
    }

    const fieldName = col.fieldName || col.name;
    let result = dataRow[fieldName];
    if (fieldName.indexOf('.') !== -1) {
      result = dataRow;
      fieldName.split('.').forEach(item => {
        if (result) {
          result = result[item];
        }
      });
      //return result || '';
    }

    return result !== undefined && result !== null ? result : '';
  }


  private _getDataForTable() {
    if (this.option?.functionData) {
      return this.option?.functionData(this._filter);
    }

    return new Observable<PagedResultDto<any>>();
  }

  private _getDisplayColumns() {
    const cols = this.option.columns
      .filter(x => this.getGrantedPolicy(x.permission) || x.dataType === 'status')
      .map(x => x.name);
    if (this.option.actions?.length) {
      this._displayColumns = ['Actions', ...cols];
    } else {
      this._displayColumns = cols;
    }
  }

  isShowAction(value: any, isTop: boolean, isDepartmentChange: boolean){
    if (!isTop && !isDepartmentChange) {
      return true;
    }
    if (((value?.status === NatsStatus.Open && value?.staffId === AppConsts.currentStaff.id) 
      || this.currentUser.roles.findIndex(x => x === 'admin') > -1) && !isDepartmentChange ){
      return true;
    }
    if ((value?.endDate === undefined || value?.endDate === null) && !isTop) {
        return true;
    }
    return false;
  }
}

export interface DatatableOption<T> {
  functionData?: (input: any) => Observable<PagedResultDto<T>>;
  sortable?: boolean;
  defaultSorting?: {
    field?: string;
    direction?: 'asc' | 'desc';
  },
  columns: DatatableColumn<T>[];
  actions?: DatatableActionItem<T>[];
  pageSizeList?: number[];
  width?: number;
  rowClick?: (dataRow: T) => void;
  tableName?: string;
  showIndexAction?: boolean;
  showIndexViewPhoto?:boolean;
}

interface DatatableColumn<T> {
  name: string;
  displayName: string;
  dataType?: 'string' | 'image' | 'number' | 'date' | 'time' | 'datetime' | 'status' | 'select' | 'boolean' | 'viewphoto';
  sortable?: boolean;
  fieldName?: string;
  customRender?: (dataRow: T) => any;
  permission?: string;
  click?: (dataRow: T) => void;
  width?: number;
  format?: string;
  getSelected?: (dataRow: T) => boolean;
  isNats?: boolean;
  cssClass?: string;
}

interface DatatableActionItem<T> {
  icon: string;
  click: (dataRow: T) => void;
  name?: string;
  color?: 'primary' | 'accent' | 'warn';
  permission?: string;
  isTop?: boolean;
  isDepartmentChange?: boolean;
  cssClass?: string;
}
