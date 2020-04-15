import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiAreasComponent } from './ci-areas.component';

describe('CiAreasComponent', () => {
  let component: CiAreasComponent;
  let fixture: ComponentFixture<CiAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
