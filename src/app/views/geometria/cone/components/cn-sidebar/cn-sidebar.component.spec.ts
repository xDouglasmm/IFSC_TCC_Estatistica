import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CnSidebarComponent } from "./cn-sidebar.component";

describe("CnSidebarComponent", () => {
  let component: CnSidebarComponent;
  let fixture: ComponentFixture<CnSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CnSidebarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
