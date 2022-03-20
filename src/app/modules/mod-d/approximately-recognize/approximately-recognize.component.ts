import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IAccuracy } from 'src/app/store/interfaces/accuracy.interfaces';
import { Store } from '@ngrx/store';
import { delAccuracy } from '../../../store/accuracy/accuracy.actions';

@Component({
  selector: 'app-approximately-recognize',
  templateUrl: './approximately-recognize.component.html',
  styleUrls: ['./approximately-recognize.component.scss']
})
export class ApproximatelyRecognizeComponent implements OnInit {

  @Input() data: IAccuracy;
  @Input() add: any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    console.log(100099, this.add);
  }

  public delete(id): void {
    this.store.dispatch(delAccuracy({ payload: id }));
  }
}
