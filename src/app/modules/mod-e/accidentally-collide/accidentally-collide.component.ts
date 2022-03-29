import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { evidenceGetAllRequest } from 'src/app/store/evidence/evidence.actions';
import { getEvidences } from '../../../store/evidence/evidence.selectors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-accidentally-collide',
  templateUrl: './accidentally-collide.component.html',
  styleUrls: ['./accidentally-collide.component.scss']
})
export class AccidentallyCollideComponent implements OnInit, OnDestroy {

  public unsubscribe$ = new Subject<void>();

  public evidences$ = this.store.select(getEvidences).pipe(takeUntil(this.unsubscribe$));

  constructor(private store: Store) { }

  ngOnInit(): void {}

  public getAllEvidenceRequest(): void {
    this.store.dispatch(evidenceGetAllRequest());
  }

  ngOnDestroy(): void {
   this.unsubscribe$.next();
   this.unsubscribe$.complete();
  }

}
