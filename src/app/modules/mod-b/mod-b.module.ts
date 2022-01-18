import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModBRoutingModule } from 'src/app/modules/mod-b/mod-b-routing.module';
import { CarComponent } from 'src/app/modules/mod-b/car/car.component';
import { KiaComponent } from './kia/kia.component';
import { BmvComponent } from './bmv/bmv.component';



@NgModule({
  declarations: [
    CarComponent,
    KiaComponent,
    BmvComponent
  ],
  imports: [
    CommonModule,
    ModBRoutingModule
  ],
  // entryComponents: [BmvComponent]
})
export class ModBModule { }
