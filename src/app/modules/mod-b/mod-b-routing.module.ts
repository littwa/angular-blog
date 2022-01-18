import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from 'src/app/modules/mod-b/car/car.component';
import { KiaComponent } from 'src/app/modules/mod-b/kia/kia.component';

const routes: Routes = [
  { path: '', component: CarComponent,
    children: [
      { path: '', component: KiaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModBRoutingModule { }
