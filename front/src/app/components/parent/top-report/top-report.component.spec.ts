import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopReportComponent } from './top-report.component';

describe('TopReportComponent', () => {
  let component: TopReportComponent;
  let fixture: ComponentFixture<TopReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopReportComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
