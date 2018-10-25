import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsoAccordionComponent } from './dso-accordion.component';

describe('DsoAccordionComponent', () => {
  let component: DsoAccordionComponent;
  let fixture: ComponentFixture<DsoAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsoAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsoAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
