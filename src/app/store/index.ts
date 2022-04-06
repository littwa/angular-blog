import { ActionReducer, MetaReducer, Action } from '@ngrx/store';
import { merge } from 'lodash';

export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  let onInit = true;
  return (state, action: Action): any => {
    // console.log('state', state);
    // console.log('action', action);
    // return reducer(state, action);
    const nextState = reducer(state, action);
    if (onInit) {
      onInit = false;
      const savedState = JSON.parse(localStorage.getItem('__storage__')) || {};
      return merge(nextState, savedState);
    }
    localStorage.setItem('__storage__', JSON.stringify(nextState) );
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];
