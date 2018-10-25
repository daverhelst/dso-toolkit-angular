import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsoSearchbarComponent } from './dso-searchbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DsoSearchbarComponent],
  exports: [DsoSearchbarComponent]
})
export class DsoSearchbarModule {}
