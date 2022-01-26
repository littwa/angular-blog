import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/shared/services/cat.service';

@Component({
  selector: 'app-bmv',
  templateUrl: './bmv.component.html',
  styleUrls: ['./bmv.component.scss']
})
export class BmvComponent implements OnInit {
  value: any = null;
  num = this.catService.amount;

  constructor(private catService: CatService) {}

  ngOnInit(): void {}

  inc(): void {
    this.catService.increment();
  }

  getNum(): number {
    return this.catService.amount;
  }

}
