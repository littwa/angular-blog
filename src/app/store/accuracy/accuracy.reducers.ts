import * as accuracyActions from './accuracy.actions';
import { createReducer, on } from '@ngrx/store';
import { IAccuracy } from 'src/app/store/interfaces/accuracy.interfaces';


export const INIT_STATE: IAccuracy[] = [];

export const accuracyReducer = createReducer(
  INIT_STATE,
  on(accuracyActions.addAccuracy, (s, a) => ([ ...s, a.payload ]))
);



// export const initialState = { amount: 0, sum: 1 };
//
// export function reducer(state = initialState, action: MainAction.ActionMain) {
//   switch (action.type) {
//     case MainAction.ADD_MAIN:
//       return { ...state, amount: state.amount + action.payload }
//     case MainAction.DEL_MAIN:
//       return { ...state, amount: state.amount - action.payload }
//     default:
//       return state
//   }
// }
//
// export const getAmountSelector = (state) => state.amount;
// export const getSumSelector = (state) => state.sum;
