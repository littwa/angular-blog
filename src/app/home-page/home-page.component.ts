import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../shared/interfaces';
import { PostsService } from '../shared/posts.service';
// import { Store } from '@ngrx/store';
// import { AddMainAction, DelMainAction } from '../core/main/main.actions';
// import { getAmount } from '../core/index';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public posts$: Observable<Post[]>;
  public ngrxx$: Observable<any>;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getAll();

    // this.ngrxx$ = this.store.select(getAmount);
  }

  handleClick(): void {
    // this.store.dispatch(new AddMainAction(1));
  }

  handleClickDel(): void {
    // this.store.dispatch(new DelMainAction(1));
  }
}
