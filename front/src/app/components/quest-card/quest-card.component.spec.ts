import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestCardComponent } from "./quest-card.component";

describe("QuestCardComponent", () => {
  let component: QuestCardComponent;
  let fixture: ComponentFixture<QuestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
