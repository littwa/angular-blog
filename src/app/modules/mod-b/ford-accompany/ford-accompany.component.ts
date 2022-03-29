import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  empty,
  from,
  fromEvent, generate,
  interval,
  merge,
  Observable,
  of,
  ReplaySubject,
  Subject,
  timer, zip
} from 'rxjs';
import { concatMap, map, mergeMap, reduce, scan, share, switchMap, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ford-accompany',
  templateUrl: './ford-accompany.component.html',
  styleUrls: ['./ford-accompany.component.scss']
})
export class FordAccompanyComponent implements OnInit, OnDestroy, AfterViewInit {
  private unsubscribe$ = new Subject<void>();

  public observable$ = new Observable((observe) => {
    observe.next('observe.next');
    observe.error('observe.error');
    observe.complete();
  });
  public subject$ = new Subject<string>();
  public behaviorSubject$ = new BehaviorSubject<string>('behaviorSubject');
  public replaySubject$ = new ReplaySubject<string>(3);
  public asyncSubject$ = new AsyncSubject<string>();

  public subjectExp$ = new Subject<any>();

  public subjectMapExternal$ = new Subject<any>();
  public subjectMapInternal$ = new Subject<any>();
  @ViewChild('ref') ref: ElementRef;

  constructor() {
    // const source = interval(3000)
    //   .pipe(
    //     map((x: number) => {
    //       console.log('Processing: ', x);
    //       return x * x;
    //     }),
    //   // share()
    //   );
    //
    // source.subscribe(x => console.log('subscription 1: ', x));
    // source.subscribe(x => console.log('subscription 1: ', x));
    // source.subscribe(x => console.log('subscription 22: ', x));
  }

  ngOnInit(): void {
    this.observable$.subscribe((v) => console.log(v), (err) => console.log(err), () => console.log('observe.complete'));
    this.subject$.subscribe(v => console.log(v));
    this.behaviorSubject$.subscribe((v => console.log(v)));
    this.replaySubject$.subscribe(v => console.log(v));
    this.asyncSubject$.subscribe(v => console.log(v));
    merge(this.subject$, this.behaviorSubject$, this.replaySubject$).subscribe(v => console.log('merge: ', v));

    this.subjectExp$.pipe(scan((acc, v) => acc + v, 0)).subscribe(v => console.log('subjectExp$: ', v));

    this.subjectMapExternal$.pipe(
      // mergeMap(x => this.subjectMapInternal$.pipe(map(i => x + i)))
      // mergeMap(x => interval(2000).pipe(take(3), map(i => x + i)))
      concatMap(x => interval(2000).pipe(take(3), map(i => x + i)))
    ).subscribe(v => console.log('subjectMap: ', v));

  }

  ngAfterViewInit(): void {
    fromEvent(this.ref.nativeElement, 'click').pipe(takeUntil(this.unsubscribe$)).subscribe(v => console.log('fromEvent: ', v));
  }

  public handleClick(e: MouseEvent): void {
    this.subject$.complete();
  }

  public handleClick2(e: MouseEvent): void {
    this.behaviorSubject$.complete();
  }

  public handleClick3(e: MouseEvent): void {
    this.replaySubject$.subscribe(v => console.log('replaySubject$.subscribe: ', v));
  }

  public handleClick4(e: MouseEvent): void {
    this.asyncSubject$.complete();
  }

  public handleClick5(e: MouseEvent): void {
    this.subjectExp$.complete();
  }

  public handleClickSub(e): void {
    this.subject$.next('subject.next');
  }

  public handleClickBehaviorSub($event: MouseEvent): void {
    this.behaviorSubject$.next('behaviorSubject.next');
  }

  public handleClickReplaySub(e: MouseEvent): void {
    this.replaySubject$.next('replaySubject.next');
  }

  public handleClickAsyncSub(e: MouseEvent): void {
    this.asyncSubject$.next('asyncSubject.next');
  }

  public handleClickSubjectExp($event: MouseEvent): void {
    this.subjectExp$.next(Date.now());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public handleClickSubjectMapExternal($event: MouseEvent): void {
    this.subjectMapExternal$.next(Date.now());
  }

  public handleClickSubjectMapInternal($event: MouseEvent): void {
    this.subjectMapInternal$.next(Date.now());
  }
}
