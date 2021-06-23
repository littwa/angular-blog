import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output, ViewChild } from '@angular/core';

import { EmojiSearch } from '@ctrl/ngx-emoji-mart';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';



@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  isVisible: boolean = true
  public value: string = '';
  constructor() { }
  @ViewChild('textarea', { static: false }) textarea;

  @Output() onAddPostChange = new EventEmitter<any>();

  ngOnInit(): void { }

  addEmoji(e) {
    console.log(e)
    console.log(e.emoji)

    this.value = this.value + e.emoji.native

  }

  addPostHandle() {
    this.onAddPostChange.emit(this.value);
    this.value = "";
  }

}
