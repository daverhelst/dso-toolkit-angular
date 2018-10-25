import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DsoAlertModule } from 'dso-toolkit-angular';
import { DsoAccordionModule } from 'dso-toolkit-angular';
import { DsoMenuModule } from 'dso-toolkit-angular';
import { DsoSearchbarModule } from 'dso-toolkit-angular';

import { AppComponent } from './app.component';
import { DsoRoutingModule } from './dso-routing.module';
import { DsoAlertDemoComponent } from './dso-alert-demo/dso-alert-demo.component';
import { DsoAccordionDemoComponent } from './dso-accordion-demo/dso-accordion-demo.component';
import { DsoSearchbarDemoComponent } from './dso-searchbar-demo/dso-searchbar-demo.component';
import { DsoMenuDemoComponent } from './dso-menu-demo/dso-menu-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DsoAlertDemoComponent,
    DsoAccordionDemoComponent,
    DsoSearchbarDemoComponent,
    DsoMenuDemoComponent
  ],
  imports: [
    BrowserModule,
    DsoRoutingModule,
    DsoAlertModule,
    DsoAccordionModule,
    DsoMenuModule,
    DsoSearchbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
