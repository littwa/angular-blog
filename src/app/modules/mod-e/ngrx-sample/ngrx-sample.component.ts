import { Component, OnInit } from '@angular/core';
import { default as jsonFile } from 'src/assets/data.json';
import tsFile from 'src/assets/data';

@Component({
  selector: 'app-ngrx-sample',
  templateUrl: './ngrx-sample.component.html',
  styleUrls: ['./ngrx-sample.component.scss']
})
export class NgrxSampleComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log(JSON.stringify(jsonFile));
    console.log(jsonFile);
    console.log(tsFile);
  }

}
