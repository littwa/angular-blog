import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from 'src/app/store/evidence/evidence.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { EvidenceService } from '../../services/evidence.service';

@Injectable() export class EvidenceEffects {

  constructor(private actions$: Actions, private evidenceService: EvidenceService) {}

  getEvidence$ = createEffect(() => this.actions$.pipe(
    ofType(actions.EVIDENCE_GET_ALL_REQUEST),
    mergeMap(action => this.evidenceService.getEvidenceData$().pipe(
      // map(v => ({ type: actions.EVIDENCE_ADD_SUCCESS, payload: v })),
      map(v => actions.evidenceGetAllSuccess({ payload: v })),
      // catchError(err => of({ type: 'ERRRRRRRR', err: err.message }))
    ))
  ));


}
