import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiViewComponent } from './ci-view.component';

describe('CiViewComponent', () => {
  let component: CiViewComponent;
  let fixture: ComponentFixture<CiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
