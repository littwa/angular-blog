import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-possibility-survive',
  templateUrl: './possibility-survive.component.html',
  styleUrls: ['./possibility-survive.component.scss']
})
export class PossibilitySurviveComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    // this.store.select()
  }

}
