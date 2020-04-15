import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsViewComponent } from './es-view.component';

describe('EsViewComponent', () => {
  let component: EsViewComponent;
  let fixture: ComponentFixture<EsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
