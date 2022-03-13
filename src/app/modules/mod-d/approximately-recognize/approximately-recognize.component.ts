import { Component, Input, OnInit } from '@angular/core';
import { IAccuracy } from 'src/app/store/interfaces/accuracy.interfaces';

@Component({
  selector: 'app-approximately-recognize',
  templateUrl: './approximately-recognize.component.html',
  styleUrls: ['./approximately-recognize.component.scss']
})
export class ApproximatelyRecognizeComponent implements OnInit {

  @Input() data: IAccuracy;

  constructor() { }

  ngOnInit(): void {}

}
