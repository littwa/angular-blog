import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FluxArchitectureComponent } from './flux-architecture/flux-architecture.component';

const routes: Routes = [
  { path: '', component: FluxArchitectureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModDRoutingModule { }
