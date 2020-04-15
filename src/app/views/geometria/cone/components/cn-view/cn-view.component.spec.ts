import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnViewComponent } from './cn-view.component';

describe('CnViewComponent', () => {
  let component: CnViewComponent;
  let fixture: ComponentFixture<CnViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
