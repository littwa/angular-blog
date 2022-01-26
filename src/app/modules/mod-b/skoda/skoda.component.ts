import { Component, OnInit } from '@angular/core';
import { BmvComponent } from 'src/app/modules/mod-b/bmv/bmv.component';


@Component({
  selector: 'app-skoda',
  templateUrl: './skoda.component.html',
  styleUrls: ['./skoda.component.scss']
})
export class SkodaComponent implements OnInit {
  BmvComponent = BmvComponent;
  myContent = [[ document.createTextNode('Ahoj')], [ document.createElement('p')]];
  constructor() { }

  ngOnInit(): void {}

  render(): void {}

  clear(): void {}

}
