import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestRootPage } from './quest-root.page';

describe('QuestRootPage', () => {
  let component: QuestRootPage;
  let fixture: ComponentFixture<QuestRootPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestRootPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestRootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
