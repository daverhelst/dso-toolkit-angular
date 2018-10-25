import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DsoAlertDemoComponent } from './dso-alert-demo/dso-alert-demo.component';
import { DsoAccordionDemoComponent } from './dso-accordion-demo/dso-accordion-demo.component';
import { DsoMenuDemoComponent } from './dso-menu-demo/dso-menu-demo.component';
import { DsoSearchbarDemoComponent } from './dso-searchbar-demo/dso-searchbar-demo.component';

const routes: Routes = [
  { path: 'alert', component: DsoAlertDemoComponent },
  { path: 'accordion', component: DsoAccordionDemoComponent },
  { path: 'menu', component: DsoMenuDemoComponent },
  { path: 'searchbar', component: DsoSearchbarDemoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class DsoRoutingModule { }
