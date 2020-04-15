import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnAreaLateralComponent } from './cn-area-lateral.component';

describe('CnAreaLateralComponent', () => {
  let component: CnAreaLateralComponent;
  let fixture: ComponentFixture<CnAreaLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnAreaLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnAreaLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
