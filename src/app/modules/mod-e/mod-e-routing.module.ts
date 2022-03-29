import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModDModule } from '../mod-d/mod-d.module';
import { NgrxSampleComponent } from './ngrx-sample/ngrx-sample.component';

const routes: Routes = [
  { path: '', component: NgrxSampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModERoutingModule { }
