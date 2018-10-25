import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsoToolkitAngularComponent } from './dso-toolkit-angular.component';

describe('DsoToolkitAngularComponent', () => {
  let component: DsoToolkitAngularComponent;
  let fixture: ComponentFixture<DsoToolkitAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsoToolkitAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsoToolkitAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
