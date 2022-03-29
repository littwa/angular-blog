import { Action, createAction, props } from '@ngrx/store';
import { IEvidence } from '../interfaces/evidence.interfaces';

export const EVIDENCE_GET_ALL_REQUEST = '[EVIDENCE] Get-all request';
export const EVIDENCE_GET_ALL_SUCCESS = '[EVIDENCE] Get-all success';
export const EVIDENCE_GET_ALL_ERROR = '[EVIDENCE] Get-all error';

export const EVIDENCE_ADD_REQUEST = '[EVIDENCE] Add request';
export const EVIDENCE_ADD_SUCCESS = '[EVIDENCE] Add success';
export const EVIDENCE_ADD_ERROR = '[EVIDENCE] Add error';

export const EVIDENCE_EDIT_REQUEST = '[EVIDENCE] Edit request';
export const EVIDENCE_EDIT_SUCCESS = '[EVIDENCE] Edit success';
export const EVIDENCE_EDIT_ERROR = '[EVIDENCE] Edit error';

export const EVIDENCE_DEL_REQUEST = '[EVIDENCE] Del request';
export const EVIDENCE_DEL_SUCCESS = '[EVIDENCE] Del success';
export const EVIDENCE_DEL_ERROR = '[EVIDENCE] Del error';

export const evidenceGetAllRequest = createAction(EVIDENCE_GET_ALL_REQUEST);
export const evidenceGetAllSuccess = createAction(EVIDENCE_GET_ALL_SUCCESS, props<{ payload: IEvidence[] }>());
export const evidenceGetAllError = createAction(EVIDENCE_GET_ALL_ERROR, props<{ err: any }>());

export const evidenceAddRequest = createAction(EVIDENCE_ADD_REQUEST, props<{ payload: IEvidence }>());
export const evidenceAddSuccess = createAction(EVIDENCE_ADD_SUCCESS, props<{ payload: any }>());
export const evidenceAddError = createAction(EVIDENCE_ADD_ERROR, props<{ err: any }>());

export const evidenceEditRequest = createAction(EVIDENCE_EDIT_REQUEST, props<{ payload: any, id: string }>()); // , (payload, id) => ({ payload, id })
export const evidenceEditSuccess = createAction(EVIDENCE_EDIT_SUCCESS, props<{ payload: IEvidence }>());
export const evidenceEditError = createAction(EVIDENCE_EDIT_ERROR, props<{ err: any }>());

export const evidenceDelRequest = createAction(EVIDENCE_DEL_REQUEST, props<{ id: number }>());
export const evidenceDelSuccess = createAction(EVIDENCE_DEL_SUCCESS, props<{ id: number }>());
export const evidenceDelError = createAction(EVIDENCE_DEL_ERROR, props<{ err: any }>());
