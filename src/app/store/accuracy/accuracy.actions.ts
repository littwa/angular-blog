import { Action, createAction, props } from '@ngrx/store';

export const GET_ACCURACY = '[Accuracy] Get';
export const ADD_ACCURACY = '[Accuracy] Add';
export const DEL_ACCURACY = '[Accuracy] Del';
export const UPDATE_ACCURACY = '[Accuracy] Update';
export const RESET_ACCURACY = '[Accuracy] Reset';
export const ERR_ACCURACY = '[Accuracy] Err';

export const getAccuracy = createAction(GET_ACCURACY);
export const addAccuracy = createAction(ADD_ACCURACY, props<{ payload: any }>());
export const delAccuracy = createAction(DEL_ACCURACY, props<{ payload: any }>());
export const updateAccuracy = createAction(UPDATE_ACCURACY, props<{ payload: any }>());
export const resetAccuracy = createAction(RESET_ACCURACY);
export const errAccuracy = createAction(ERR_ACCURACY, props<{ error: any }>());
