import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { BmvComponent } from 'src/app/modules/mod-b/bmv/bmv.component';

@Component({
  selector: 'app-kia',
  templateUrl: './kia.component.html',
  styleUrls: ['./kia.component.scss']
})
export class KiaComponent {

  @ViewChild('book') book!: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  addBook(): void {
    this.book.viewContainerRef.clear();

    const bookItemComponent = this.componentFactoryResolver.resolveComponentFactory(
      BmvComponent
    );
    const bookItemComponentRef: any = this.book.viewContainerRef.createComponent(
        bookItemComponent
      )
    ;

    bookItemComponentRef.instance.value = {
      title: 'Great Expectations',
      author: 'Charles Dickens',
    };
  }

}
