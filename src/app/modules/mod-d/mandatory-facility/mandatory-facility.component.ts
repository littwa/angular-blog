import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentRef, ContentChild, ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { Store } from '@ngrx/store';
import { addAccuracy } from '../../../store/accuracy/accuracy.actions';
import { ProperlyInfiltrationComponent } from '../properly-infiltration/properly-infiltration.component';
import { PossibilitySurviveComponent } from '../posibility-survive/possibility-survive.component';

@Component({
  selector: 'app-mandatory-facility',
  templateUrl: './mandatory-facility.component.html',
  styleUrls: ['./mandatory-facility.component.scss']
})
export class MandatoryFacilityComponent implements OnInit, AfterViewInit, AfterContentInit {
  public componentRef = ProperlyInfiltrationComponent;
  @Input() tmplRef: TemplateRef<any>;
  @ViewChild('elementP') elementP;
  @ViewChildren('element') element: QueryList<ElementRef>;
  @ViewChildren('template') template: QueryList<TemplateRef<any>>;
  @ContentChild(PossibilitySurviveComponent) contChildRef: PossibilitySurviveComponent;
  @ContentChild('contChildDiv') contChildDiv: ElementRef;
  @ContentChildren(PossibilitySurviveComponent) contentChildren: QueryList<any>;
  @ContentChildren('contChildP') contChildP: QueryList<any>;
  @ContentChildren('ngTemplate, ngTemplate2, ngTemplate3') ngTemplates: QueryList<TemplateRef<any>>;

  constructor(private store: Store) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('@ViewChild(elementP)', this.elementP);
    console.log('@ViewChildren(element)', this.element);
    console.log('@ViewChildren(template)', this.template);
  }

  ngAfterContentInit(): void {
    console.log('@ContentChild(contChildRef)--------', this.contChildRef, this.contChildRef.testMethodContentChild());
    console.log('@contentChildren(contentChildren)--------', this.contentChildren);
    console.log('@contentChild(contChildDiv)--------', this.contChildDiv);
    console.log('@contentChildren(contChildP)--------', this.contChildP);
    console.log('@contentChildren(ngTemplate)--------', this.ngTemplates);

  }

  public handleAddAccuracy(): void {
    const payload = {
      id: Date.now(),
      name: new Date().toISOString()
    };
    this.store.dispatch(addAccuracy({ payload }));
  }
}
