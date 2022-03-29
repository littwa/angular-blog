import { Component, Input, OnInit } from '@angular/core';
import { IEvidence } from '../../../store/interfaces/evidence.interfaces';

@Component({
  selector: 'app-prohibited-strength',
  templateUrl: './prohibited-strength.component.html',
  styleUrls: ['./prohibited-strength.component.scss']
})
export class ProhibitedStrengthComponent implements OnInit {

  @Input() data: IEvidence;

  constructor() { }

  ngOnInit(): void {
  }

}
