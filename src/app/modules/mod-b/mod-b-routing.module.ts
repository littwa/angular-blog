import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpelComponent } from 'src/app/modules/mod-b/opel/opel.component';

const routes: Routes = [
  { path: '', component: OpelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModBRoutingModule { }
