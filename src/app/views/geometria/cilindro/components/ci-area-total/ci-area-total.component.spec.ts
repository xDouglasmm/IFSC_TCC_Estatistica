import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiAreaTotalComponent } from './ci-area-total.component';

describe('CiAreaTotalComponent', () => {
  let component: CiAreaTotalComponent;
  let fixture: ComponentFixture<CiAreaTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiAreaTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiAreaTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
