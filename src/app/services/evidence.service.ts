import { Injectable } from '@angular/core';
import { default as data } from 'src/assets/data.json';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IEvidence } from '../store/interfaces/evidence.interfaces';

@Injectable({ providedIn: 'root' })
export class EvidenceService {
  constructor() {}

  getEvidenceData$(): Observable<IEvidence[]> {
    return of(data).pipe(delay(1500));
  }
}
