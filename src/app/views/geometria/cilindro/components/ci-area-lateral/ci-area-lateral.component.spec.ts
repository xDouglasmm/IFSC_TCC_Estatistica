import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiAreaLateralComponent } from './ci-area-lateral.component';

describe('CiAreaLateralComponent', () => {
  let component: CiAreaLateralComponent;
  let fixture: ComponentFixture<CiAreaLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiAreaLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiAreaLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
