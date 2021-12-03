import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OdessaComponent } from 'src/app/modules/mod-a/odessa/odessa.component';
import { CityComponent } from 'src/app/modules/mod-a/city/city.component';
import { PoltavaComponent } from 'src/app/modules/mod-a/poltava/poltava.component';

const routes: Routes = [
  { path: '', component: CityComponent,
    data: { cityData: 'container for city with path: \'\' qwe' },
    children: [
      { path: 'odessa', component: OdessaComponent },
      { path: 'poltava', component: PoltavaComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModARoutingModule { }
