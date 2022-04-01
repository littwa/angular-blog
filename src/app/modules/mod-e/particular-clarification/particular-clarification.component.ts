import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { evidenceAddRequest } from 'src/app/store/evidence/evidence.actions';

@Component({
  selector: 'app-particular-clarification',
  templateUrl: './particular-clarification.component.html',
  styleUrls: ['./particular-clarification.component.scss']
})
export class ParticularClarificationComponent implements OnInit {
  form: FormGroup;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      active: new FormControl(false),
      address: new FormGroup({
        index: new FormControl(null, [Validators.required]),
        country: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
      }),
    });
  }

  public submit(): void {
    this.store.dispatch(evidenceAddRequest({ payload: { ...this.form.value, id: Date.now() } }));
    this.form.reset({ active: false });
    console.log(this.form);
  }
}
