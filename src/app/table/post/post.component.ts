import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public date: Date = new Date();

  constructor() { }

  @Input() content: string

  ngOnInit(): void { }

}
