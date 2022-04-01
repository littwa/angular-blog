import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from 'src/app/store/evidence/evidence.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EvidenceService } from '../../services/evidence.service';
import { Store } from '@ngrx/store';

@Injectable() export class EvidenceEffects {

  constructor(private actions$: Actions, private evidenceService: EvidenceService, private store: Store) {}

  getEvidence$ = createEffect(() => this.actions$.pipe(
    ofType(actions.EVIDENCE_GET_ALL_REQUEST),
    mergeMap(action => this.evidenceService.getEvidenceData$().pipe(
      // map(v => ({ type: actions.EVIDENCE_ADD_SUCCESS, payload: v })),
      map(v => actions.evidenceGetAllSuccess({ payload: v })),
      // catchError(err => of({ type: 'ERRRRRRRR', err: err.message }))
    ))
  ));

  addEvidence$ = createEffect(() => this.actions$.pipe(
    ofType(actions.EVIDENCE_ADD_REQUEST),
    tap(v => console.log(v)),
    map((v: any) => ({ type: actions.EVIDENCE_ADD_SUCCESS, payload: v.payload })),
    // mergeMap((action) => actions.evidenceAddSuccess({ payload: action.payload }))
  ));

  delEvidence$ = createEffect(() => this.actions$.pipe(
    ofType(actions.EVIDENCE_DEL_REQUEST),
    // mergeMap((v: any) => of({ type: actions.EVIDENCE_DEL_SUCCESS, id: v.id }))
    // mergeMap((v: any)  => of(actions.evidenceDelSuccess({ id: v.id }))))
    map((v: any) => ({ type: actions.EVIDENCE_DEL_SUCCESS, id: v.id }))
  ));


}
