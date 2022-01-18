import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModCRoutingModule } from 'src/app/modules/mod-c/mod-c-routing.module';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ChartsHeaderComponent } from './charts-header/charts-header.component';



@NgModule({
  declarations: [
    BarComponent,
    PieComponent,
    ChartsHeaderComponent
  ],
  imports: [
    CommonModule,
    ModCRoutingModule
  ]
})
export class ModCModule { }
