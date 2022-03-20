import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAccuracySelector } from '../../../store/accuracy/accuracy.selectors';
import { of } from 'rxjs';
import { animate, transition, trigger, state, style } from '@angular/animations';
import { chartAnimation } from '../../../animations/chart.animation';


@Component({
  selector: 'app-possibility-survive',
  templateUrl: './possibility-survive.component.html',
  styleUrls: ['./possibility-survive.component.scss'],
  animations: [
    chartAnimation('chartShowHide'),
    trigger('expandedPanel', [
      state('initial', style({ width: 'fit-content', 'background-color': '#911' })),
      state('expanded', style({  width: 'fit-content', transform: 'scale(0)', 'background-color': '#119989' })),
      transition('initial <=> expanded', animate('0.2s')),
    ]),
    trigger('exp', [
      transition('void => *', [animate('1.1s'), style({opacity: 0})]),
      transition('* => void', [ animate('1.1s'), style({opacity: 1}) ]),
    ])
  ],
})
export class PossibilitySurviveComponent implements OnInit {

  public items = this.store.select(getAccuracySelector) || of([]);
  public val = 777;
  isExpanded = false;
  state = 'initial';
  state2 = 'x';
  hide = true;
  list = [1, 2, 3];
  // @HostBinding('@chartShowHide') chartShowHide;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(getAccuracySelector).subscribe(v => console.log(1000066, v));
  }

  testMethodContentChild(): any {
    console.log('testMethodContentChild Work');
    return this.val;
  }

  public expand(): void {
    console.log(this.state, this.isExpanded);
    this.isExpanded = !this.isExpanded;
    this.state = this.isExpanded ? 'expanded' : 'initial';
  }

}
