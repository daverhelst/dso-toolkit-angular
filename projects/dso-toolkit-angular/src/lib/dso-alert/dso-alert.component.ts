import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dso-alert',
  templateUrl: './dso-alert.component.html'
})
export class DsoAlertComponent implements OnInit {
  @Input() alertType: string;

  constructor() {
  }

  ngOnInit() {
  }

}
