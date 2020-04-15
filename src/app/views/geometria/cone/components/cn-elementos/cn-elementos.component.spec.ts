import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CnElementosComponent } from "./cn-elementos.component";

describe("CnElementosComponent", () => {
  let component: CnElementosComponent;
  let fixture: ComponentFixture<CnElementosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CnElementosComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
