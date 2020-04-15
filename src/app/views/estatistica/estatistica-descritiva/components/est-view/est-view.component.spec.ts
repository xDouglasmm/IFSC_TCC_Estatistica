import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstViewComponent } from './est-view.component';

describe('EstViewComponent', () => {
  let component: EstViewComponent;
  let fixture: ComponentFixture<EstViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
