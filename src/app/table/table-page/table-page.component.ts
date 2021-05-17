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
  smida = smida;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ["idReport",
    "idSubject",
    "termType",
    "publicationType",
    // "reportState",
    // "reportGroup",
    "outputNumber",
    // "outputDate",
    // "bSentToNSSMC",
    // "bDisclosure",
    "dateFill",
    // "reportFormat"
  ]
  selected = "#"
  valueOutputNumber = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    console.log(smida)
    this.dataSource = new MatTableDataSource(smida);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilter2(v) {

    this.dataSource.filterPredicate = (data, filter) => data.termType.trim().toLowerCase() === filter
    this.dataSource.filter = v.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilterOutput(event) {

    this.dataSource.filterPredicate = (data, filter) => {
      return data.outputNumber.trim().toLowerCase().includes(filter);
    }
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    // this.dataSource.filterPredicate = (data, filter) => data.outputNumber.trim().toLowerCase() === filter
    // this.dataSource.filter = v.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  // meth() {
  //   console.log(1212)
  // }


  originArr = (arr) => arr.reduce((unic, item) => unic.includes(item.termType) ? unic : [...unic, item.termType], [])

}
