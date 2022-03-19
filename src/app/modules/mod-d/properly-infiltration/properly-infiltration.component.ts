import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-properly-infiltration',
  templateUrl: './properly-infiltration.component.html',
  styleUrls: ['./properly-infiltration.component.scss']
})
export class ProperlyInfiltrationComponent implements OnInit, AfterViewInit {

  @ViewChild('refDiv') refDiv: ElementRef;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(1000077, this.refDiv.nativeElement);
  }

}
