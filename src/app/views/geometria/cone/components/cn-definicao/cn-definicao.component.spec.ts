import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CnDefinicaoComponent } from "./cn-definicao.component";

describe("CnDefinicaoComponent", () => {
  let component: CnDefinicaoComponent;
  let fixture: ComponentFixture<CnDefinicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CnDefinicaoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnDefinicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
