import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { BmvComponent } from 'src/app/modules/mod-b/bmv/bmv.component';

@Component({
  selector: 'app-kia',
  templateUrl: './kia.component.html',
  styleUrls: ['./kia.component.scss']
})
export class KiaComponent {

  @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  clearBook(): void {
    this.view.clear();
  }

  addBook(): void {
    this.view.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BmvComponent);
    const componentRef = this.view.createComponent(componentFactory);

    console.log(10000008, this.view);
    console.log(10000009, componentRef);
    console.log(100000010, componentFactory);

    componentRef.instance.value = {
      title: 'Great Expectations',
      author: 'Charles Dickens',
    };
  }

}
