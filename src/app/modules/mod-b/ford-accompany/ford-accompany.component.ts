import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ford-accompany',
  templateUrl: './ford-accompany.component.html',
  styleUrls: ['./ford-accompany.component.scss']
})
export class FordAccompanyComponent implements OnInit, OnDestroy, AfterViewInit {
  private unsubscribe$ = new Subject();

  public behaviorSubject = new BehaviorSubject(0);
  public subject = new Subject();
  @ViewChild('ref') ref: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.eventObservable();
  }

  public handleClick(e: MouseEvent): void {
    console.log(e);
  }

  public eventObservable(): void {
    fromEvent(this.ref.nativeElement, 'click').pipe(takeUntil(this.unsubscribe$)).subscribe(v => console.log('fromEvent: ', v));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
