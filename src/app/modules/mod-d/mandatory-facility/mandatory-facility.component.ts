import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addAccuracy } from '../../../store/accuracy/accuracy.actions';

@Component({
  selector: 'app-mandatory-facility',
  templateUrl: './mandatory-facility.component.html',
  styleUrls: ['./mandatory-facility.component.scss']
})
export class MandatoryFacilityComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {}

  public handleAddAccuracy(): void {
    const payload = {
      id: Date.now(),
      name: new Date().toISOString()
    };
    this.store.dispatch(addAccuracy({ payload }));
  }
}
