import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NZ_I18N, en_GB } from 'ng-zorro-antd/i18n';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

// import { ChartModule } from 'angular-highcharts';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
// import { ColorPickerModule } from 'ngx-color-picker';

const matModules = [
  DragDropModule,
  MatSortModule,
  MatDialogModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatTreeModule,
  MatDividerModule,
  MatListModule
];

const AntModules = [
  NzInputModule,
  NzSelectModule,
  NzRadioModule,
  NzFormModule,
  NzDatePickerModule,
  NzCheckboxModule,
  NzInputNumberModule
]

const otherModules = [
  // ChartModule,
  // PdfViewerModule,
  // ColorPickerModule
];

@NgModule({
  declarations: [],
  imports: [
    ...matModules,
    ...AntModules,
    ...otherModules
  ],
  exports: [
    ...matModules,
    ...AntModules,
    ...otherModules
  ],
  providers: [{ provide: NZ_I18N, useValue: en_GB }],
})
export class ThirdPartyModule { }
