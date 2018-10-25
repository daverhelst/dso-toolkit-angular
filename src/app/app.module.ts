import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DsoAlertModule } from 'dso-toolkit-angular';
import { DsoAccordionModule } from 'dso-toolkit-angular';

import { AppComponent } from './app.component';
import { DsoRoutingModule } from './dso-routing.module';
import { DsoAlertDemoComponent } from './dso-alert-demo/dso-alert-demo.component';
import { DsoAccordionDemoComponent } from './dso-accordion-demo/dso-accordion-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DsoAlertDemoComponent,
    DsoAccordionDemoComponent
  ],
  imports: [
    BrowserModule,
    DsoRoutingModule,
    DsoAlertModule,
    DsoAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
