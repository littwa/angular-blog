import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-particular-clarification',
  templateUrl: './particular-clarification.component.html',
  styleUrls: ['./particular-clarification.component.scss']
})
export class ParticularClarificationComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  private initForm(): void {
    this.form = new FormGroup({
      q: new FormControl('')
    });
  }

  public submit(): void {

  }
}
