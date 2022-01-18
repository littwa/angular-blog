import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModBRoutingModule } from 'src/app/modules/mod-b/mod-b-routing.module';
import { OpelComponent } from './opel/opel.component';



@NgModule({
  declarations: [
    OpelComponent
  ],
  imports: [
    CommonModule,
    ModBRoutingModule
  ]
})
export class ModBModule { }
