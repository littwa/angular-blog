import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IEvidence } from '../../../store/interfaces/evidence.interfaces';
import { Store } from '@ngrx/store';
import { evidenceDelRequest } from 'src/app/store/evidence/evidence.actions'

@Component({
  selector: 'app-prohibited-strength',
  templateUrl: './prohibited-strength.component.html',
  styleUrls: ['./prohibited-strength.component.scss']
})
export class ProhibitedStrengthComponent implements OnInit {

  @Input() data: IEvidence;

  @HostListener('contextmenu', ['$event']) handler(e: PointerEvent): void {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
    this.store.dispatch(evidenceDelRequest({ id: this.data.id }));
    // if(e.button == 0){
    //   alert('Вы кликнули левой клавишей');
    // } else if(e.button == 1){
    //   alert('Вы кликнули левой колесиком');
    // } else if(e.button == 2){
    //   alert('Вы кликнули правой клавишей');
    // }
  }

  constructor(private store: Store) { }

  ngOnInit(): void {}

}
