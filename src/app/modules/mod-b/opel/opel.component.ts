import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-opel',
  templateUrl: './opel.component.html',
  styleUrls: ['./opel.component.scss']
})
export class OpelComponent implements OnInit {

  readonly hero$ = this.route.data.pipe(
    map((data: any) => data)
  ).subscribe(v => console.log(1000002, v));

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
  }

}
