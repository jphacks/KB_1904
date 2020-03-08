import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardEditPage } from './reward-edit.page';

describe('RewardEditPage', () => {
  let component: RewardEditPage;
  let fixture: ComponentFixture<RewardEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
