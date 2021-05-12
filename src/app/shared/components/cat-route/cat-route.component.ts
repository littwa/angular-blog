import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cat-route',
  templateUrl: './cat-route.component.html',
  styleUrls: ['./cat-route.component.scss']
})
export class CatRouteComponent implements OnInit {

  cat$

  constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router)
    // console.log()
    this.cat$ = this.activatedRoute.queryParams.pipe(map(v => v.catRoute))
  }

}
