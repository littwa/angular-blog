import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModCRoutingModule } from 'src/app/modules/mod-c/mod-c-routing.module';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';



@NgModule({
  declarations: [
    PolarAreaChartComponent
  ],
  imports: [
    CommonModule,
    ModCRoutingModule
  ]
})
export class ModCModule { }
