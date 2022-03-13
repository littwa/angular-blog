import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModDRoutingModule } from './mod-d-routing.module';
import { FluxArchitectureComponent } from './flux-architecture/flux-architecture.component';
import { MandatoryFacilityComponent } from './mandatory-facility/mandatory-facility.component';
import { ProperlyInfiltrationComponent } from './properly-infiltration/properly-infiltration.component';
import { PossibilitySurviveComponent } from './posibility-survive/possibility-survive.component';
import { ApproximatelyRecognizeComponent } from './approximately-recognize/approximately-recognize.component';


@NgModule({
  declarations: [
    FluxArchitectureComponent,
    MandatoryFacilityComponent,
    ProperlyInfiltrationComponent,
    PossibilitySurviveComponent,
    ApproximatelyRecognizeComponent
  ],
  imports: [
    CommonModule,
    ModDRoutingModule
  ]
})
export class ModDModule { }
