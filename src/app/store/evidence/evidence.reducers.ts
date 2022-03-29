import { IEvidence } from '../interfaces/evidence.interfaces';
import { createAction, createReducer, on } from '@ngrx/store';
import { evidenceAddSuccess, evidenceDelSuccess, evidenceEditSuccess, evidenceGetAllSuccess } from './evidence.actions';

export const EVIDENCE_INITIAL_STATE: IEvidence[] = [];

export const evidenceReducer = createReducer(EVIDENCE_INITIAL_STATE,
  on(evidenceGetAllSuccess, (s, a) => ([ ...a.payload ])),
  on(evidenceAddSuccess, (s, a) => ([ ...s, a.payload])),
  on(evidenceEditSuccess, (s, a) => ([ ...s.map( v => v.id === a.payload.id ?  a.payload : v)])),
  on(evidenceDelSuccess, (s, a) => s.filter(v => v.id !== a.id) )
);

