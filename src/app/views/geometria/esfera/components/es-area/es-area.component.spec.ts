import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsAreaComponent } from './es-area.component';

describe('EsAreaComponent', () => {
  let component: EsAreaComponent;
  let fixture: ComponentFixture<EsAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
