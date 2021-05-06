import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { QuillModule } from "ngx-quill";
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  imports: [ReactiveComponentModule, HttpClientModule, QuillModule.forRoot()],
  exports: [ReactiveComponentModule, HttpClientModule, QuillModule]
})
export class SharedModule { }
