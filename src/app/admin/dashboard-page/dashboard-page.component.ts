import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/posts.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  pSub: Subscription
  dSub: Subscription
  posts: Post[] = []
  searchStr: string = ""

  constructor(private postsService: PostsService, private alert: AlertService) { }

  remove(id: string) {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id)
      this.alert.danger("Post was deleted")
    })
  }

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    })
  }
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
    if (this.dSub) {
      this.dSub.unsubscribe()
    }
  }

}
