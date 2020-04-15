import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnAreaTotalComponent } from './cn-area-total.component';

describe('CnAreaTotalComponent', () => {
  let component: CnAreaTotalComponent;
  let fixture: ComponentFixture<CnAreaTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnAreaTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnAreaTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
