import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CatService } from '../../services/cat.service';
import { Observable, Subject, of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-cat-route',
  templateUrl: './cat-route.component.html',
  styleUrls: ['./cat-route.component.scss']
})
export class CatRouteComponent implements OnInit {

  cat$
  form: FormGroup
  main = "2WayBinding"

  outp(e) {
    console.log(e)
    this.main = e
  }

  constructor(public router: Router, public activatedRoute: ActivatedRoute, public dialog: MatDialog, public catService: CatService) {
    const source = of(2000, 1000);
    // map value from source into inner observable, when complete emit result and move to next
    source.pipe(
      concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    ).subscribe(val => console.log(`With concatMap: ${val}`));
    // output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    // example

    // showing the difference between concatMap and mergeMap
    source.pipe(
      delay(5000),
      mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    ).subscribe(val => console.log(`With mergeMap: ${val}`));
  }

  addPhone() {
    (<FormArray>this.form.controls.phones).push(new FormControl("+380"))
  }
  subForm() {
    console.log(this.form)
  }

  ngOnInit(): void {

    this.cat$ = this.activatedRoute.queryParams.pipe(map(v => v.catRoute))

    this.form = new FormGroup({
      line: new FormControl(""),
      busy: new FormControl(""),
      customize: new FormControl(0),
      phones: new FormArray([new FormControl("+380"), new FormControl("+380")]),
      selec: new FormControl("choose"),
      check1: new FormControl(true),
      check2: new FormControl(true),
      check3: new FormControl(false),
      check4: new FormControl(false),
      radio: new FormGroup({
        radioIn: new FormControl("")
      })
    })
  }

  openDialog() {
    this.dialog.open(C)
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  handleClickDiv(e) {
    console.log(e.currentTarget)
    this.openDialog()
  }

  angStr = "" //

}


@Component({
  template: `<h1 mat-dialog-title>Dialog with elements</h1>
<div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>
<div mat-dialog-actions>
  <button mat-button mat-dialog-close>Close</button>
</div>` })
export class C { }
