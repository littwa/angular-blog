import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  constructor() { }

  public posts: string[] = []

  ngOnInit(): void { }

  addPostChange(post: string): void {
    this.posts.push(post)
  }

}
