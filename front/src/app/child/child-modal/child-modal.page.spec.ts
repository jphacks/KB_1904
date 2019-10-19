import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModalPage } from './child-modal.page';

describe('ChildModalPage', () => {
  let component: ChildModalPage;
  let fixture: ComponentFixture<ChildModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
