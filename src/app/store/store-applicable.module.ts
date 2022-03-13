import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { accuracyReducer } from './accuracy/accuracy.reducers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('accuracy', accuracyReducer)
    // EffectsModule.forFeature()
  ]
})
export class StoreApplicableModule { }
