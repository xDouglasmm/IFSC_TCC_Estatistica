import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnAreasComponent } from './cn-areas.component';

describe('CnAreasComponent', () => {
  let component: CnAreasComponent;
  let fixture: ComponentFixture<CnAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
