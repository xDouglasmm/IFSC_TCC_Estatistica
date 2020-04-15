import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometriaComponent } from './geometria.component';

describe('GeometriaComponent', () => {
  let component: GeometriaComponent;
  let fixture: ComponentFixture<GeometriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
