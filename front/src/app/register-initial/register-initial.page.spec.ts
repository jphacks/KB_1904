import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInitialPage } from './register-initial.page';

describe('RegisterInitialPage', () => {
  let component: RegisterInitialPage;
  let fixture: ComponentFixture<RegisterInitialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInitialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInitialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
