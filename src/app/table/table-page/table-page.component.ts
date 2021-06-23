import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs/operators';
import smida from '../../shared/data/smida.json'

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  constructor() { }

  posts: string[] = []

  ngOnInit(): void { }

  addPostChange(post) {
    console.log("post", post)
    this.posts.push(post)
  }

}
