import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoltavaComponent } from './poltava/poltava.component';
import { OdessaComponent } from './odessa/odessa.component';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';
import { ModARoutingModule } from 'src/app/modules/mod-a/mod-a-routing.module';

@NgModule({
  declarations: [
    PoltavaComponent,
    OdessaComponent,
    CityComponent
  ],
  imports: [
    ModARoutingModule,
    RouterModule,
    CommonModule
  ]
})
export class ModAModule { }
