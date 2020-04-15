import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CnAreaBaseComponent } from "./cn-area-base.component";

describe("CnAreaBaseComponent", () => {
  let component: CnAreaBaseComponent;
  let fixture: ComponentFixture<CnAreaBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CnAreaBaseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnAreaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
