import { NgModule } from '@angular/core';
import { DsoToolkitAngularComponent } from './dso-toolkit-angular.component';
import { DsoAlertComponent } from './dso-alert/dso-alert.component';
import { DsoAccordionComponent } from './dso-accordion/dso-accordion.component';

@NgModule({
  imports: [
  ],
  declarations: [DsoToolkitAngularComponent, DsoAlertComponent, DsoAccordionComponent],
  exports: [DsoToolkitAngularComponent]
})
export class DsoToolkitAngularModule { }
