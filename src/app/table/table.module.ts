import { NgModule } from '@angular/core';
import { TablePageComponent } from './table-page/table-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DiaryComponent } from './diary/diary.component';
import { MatIconModule } from '@angular/material/icon';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    TablePageComponent,
    DiaryComponent,
    PostComponent
  ],
  imports: [
    PickerModule,
    SharedModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    RouterModule.forChild([
      { path: '', component: TablePageComponent }
    ]),
  ],
  exports: [PickerModule]
})
export class TableModule { }
