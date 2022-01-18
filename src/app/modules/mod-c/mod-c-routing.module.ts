import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolarAreaChartComponent } from 'src/app/modules/mod-c/polar-area-chart/polar-area-chart.component';
import { BarComponent } from 'src/app/modules/mod-c/bar/bar.component';
import { PieComponent } from 'src/app/modules/mod-c/pie/pie.component';
import { ChartsHeaderComponent } from 'src/app/modules/mod-c/charts-header/charts-header.component';

const routes: Routes = [
  {
    path: '', component: ChartsHeaderComponent,
    children: [
      {
        path: 'polar', component: PolarAreaChartComponent
      },
      {
        path: 'bar', component: BarComponent
      },
      {
        path: 'pie', component: PieComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModCRoutingModule { }
