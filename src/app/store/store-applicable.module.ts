import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { accuracyReducer } from './accuracy/accuracy.reducers';
import { evidenceReducer } from './evidence/evidence.reducers';
import { EvidenceEffects } from './evidence/evidence.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('accuracy', accuracyReducer),
    StoreModule.forFeature('evidence', evidenceReducer),
    EffectsModule.forFeature([EvidenceEffects])
  ]
})
export class StoreApplicableModule { }
