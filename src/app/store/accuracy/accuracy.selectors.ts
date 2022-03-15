import { createSelector } from '@ngrx/store';
import { IAccuracy } from '../interfaces/accuracy.interfaces';

export const accuracySelector = (state) => state.accuracy;

export const getAccuracySelector = createSelector(accuracySelector, (state) => state);
// export const getCustomDataSelector = createSelector(coreSelector, (state) => state.customData);
