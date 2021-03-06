import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  readonly hero$ = this.route.data.pipe(
    map((data: any) => data)
  ).subscribe(v => console.log(1000002, v));

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

}
