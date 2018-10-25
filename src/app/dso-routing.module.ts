import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DsoAlertDemoComponent } from './dso-alert-demo/dso-alert-demo.component';
import { DsoAccordionDemoComponent } from './dso-accordion-demo/dso-accordion-demo.component';

const routes: Routes = [
  { path: 'alert', component: DsoAlertDemoComponent },
  { path: 'accordion', component: DsoAccordionDemoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class DsoRoutingModule { }
