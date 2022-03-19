import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-due-menu',
  templateUrl: './due-menu.component.html',
  styleUrls: ['./due-menu.component.scss']
})
export class DueMenuComponent {

  private skipClick = false;
  @HostBinding('class') hostClass = 'hidden';
  // @HostBinding('style') hostStyle = {'background-color': 'red'};

  constructor() {}

  @HostListener('click', ['$event']) hostClick(event: Event): void {
    console.log('click', event);
    event.stopPropagation();
  }

  show(): void {
    console.log('click show');
    this.hostClass = '';
    this.skipClick = true;
  }

  @HostListener('window:click')
  hide(): void {
    if (this.skipClick) {
      this.skipClick = false;
      return;
    }
    this.hostClass = 'hidden';
  }

}
