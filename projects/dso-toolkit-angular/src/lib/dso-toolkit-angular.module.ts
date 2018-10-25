import { NgModule } from '@angular/core';
import { DsoToolkitAngularComponent } from './dso-toolkit-angular.component';
import { DsoAlertComponent } from './dso-alert/dso-alert.component';
import { DsoAccordionComponent } from './dso-accordion/dso-accordion.component';
import { DsoSearchbarComponent } from './dso-searchbar/dso-searchbar.component';
import { DsoMenuComponent } from './dso-menu/dso-menu.component';

@NgModule({
  imports: [
  ],
  declarations: [DsoToolkitAngularComponent, DsoAlertComponent, DsoAccordionComponent, DsoSearchbarComponent, DsoMenuComponent],
  exports: [DsoToolkitAngularComponent]
})
export class DsoToolkitAngularModule { }
