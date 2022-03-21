import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModBRoutingModule } from 'src/app/modules/mod-b/mod-b-routing.module';
import { CarComponent } from 'src/app/modules/mod-b/car/car.component';
import { KiaComponent } from './kia/kia.component';
import { BmvComponent } from './bmv/bmv.component';
import { SkodaComponent } from './skoda/skoda.component';
import { AdDirective } from 'src/app/directives/ad.directive';
import { FordAccompanyComponent } from './ford-accompany/ford-accompany.component';


@NgModule({
  declarations: [
    CarComponent,
    KiaComponent,
    BmvComponent,
    SkodaComponent,
    AdDirective,
    FordAccompanyComponent
  ],
  imports: [
    CommonModule,
    ModBRoutingModule,
  ],
})
export class ModBModule { }
