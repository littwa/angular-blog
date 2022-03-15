import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAccuracySelector } from '../../../store/accuracy/accuracy.selectors';
import { of } from 'rxjs';

@Component({
  selector: 'app-possibility-survive',
  templateUrl: './possibility-survive.component.html',
  styleUrls: ['./possibility-survive.component.scss']
})
export class PossibilitySurviveComponent implements OnInit {

  public items = this.store.select(getAccuracySelector) || of([]);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(getAccuracySelector).subscribe(v => console.log(1000066, v));
  }

}
