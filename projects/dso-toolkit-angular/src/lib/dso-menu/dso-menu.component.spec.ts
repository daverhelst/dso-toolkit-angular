import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsoMenuComponent } from './dso-menu.component';

describe('DsoMenuComponent', () => {
  let component: DsoMenuComponent;
  let fixture: ComponentFixture<DsoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
