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
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule, NzMessageServiceModule } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '../icons-provider.module';
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
  MatListModule,
];

const AntModules = [
    NzRadioModule,
    NzTableModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzMessageModule,
    NzCardModule,
    NzPopconfirmModule,
    NzSwitchModule,
    NzUploadModule,
    NzImageModule,
    NzDropDownModule,
    NzSelectModule,
    NzDatePickerModule,
    NzModalModule,
    NzInputNumberModule,
    NzDividerModule,
    NzCheckboxModule,
    DragDropModule,
    NzTagModule,
    NzBadgeModule,
    NzTabsModule,
    NzSpinModule, 
    NzToolTipModule,
    NzResultModule,
    NzRateModule,
    NzPaginationModule,
    NzTimePickerModule,
    NzListModule,
    NzMessageServiceModule,
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
