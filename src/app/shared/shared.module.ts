import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { QuillModule } from "ngx-quill";
import { ReactiveComponentModule } from '@ngrx/component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";




@NgModule({
  imports: [FormsModule, CommonModule, ReactiveFormsModule, ReactiveComponentModule, HttpClientModule, QuillModule.forRoot()],
  exports: [FormsModule, CommonModule, ReactiveFormsModule, ReactiveComponentModule, HttpClientModule, QuillModule],
  declarations: []
})
export class SharedModule { }
