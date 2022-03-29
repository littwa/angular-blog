import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModERoutingModule } from './mod-e-routing.module';
import { NgrxSampleComponent } from './ngrx-sample/ngrx-sample.component';
import { AccidentallyCollideComponent } from './accidentally-collide/accidentally-collide.component';
import { ProhibitedStrengthComponent } from './prohibited-strength/prohibited-strength.component';
import { ParticularClarificationComponent } from './particular-clarification/particular-clarification.component';
import { DivideExceptionsComponent } from './divide-exceptions/divide-exceptions.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    NgrxSampleComponent,
    AccidentallyCollideComponent,
    ProhibitedStrengthComponent,
    ParticularClarificationComponent,
    DivideExceptionsComponent
  ],
  imports: [
    CommonModule,
    ModERoutingModule,
    SharedModule
  ]
})
export class ModEModule { }
