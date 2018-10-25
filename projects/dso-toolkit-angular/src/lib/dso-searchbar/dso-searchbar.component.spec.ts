import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsoSearchbarComponent } from './dso-searchbar.component';

describe('DsoSearchbarComponent', () => {
  let component: DsoSearchbarComponent;
  let fixture: ComponentFixture<DsoSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsoSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsoSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
