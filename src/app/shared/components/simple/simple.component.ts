import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {

  userName2

  @Input()
  get user() {
    return this.userName2
  }

  @Output() userChange = new EventEmitter()

  set user(val) {
    this.userName2 = val;
    this.userChange.emit(this.user);
  }

  constructor() { }

  onNameChange(e) {
    this.user = e
  }
}
