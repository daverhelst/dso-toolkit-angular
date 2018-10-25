import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsoAlertComponent } from './dso-alert.component';

describe('DsoAlertComponent', () => {
  let component: DsoAlertComponent;
  let fixture: ComponentFixture<DsoAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsoAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
