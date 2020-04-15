import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstReferenciasComponent } from './est-referencias.component';

describe('EstReferenciasComponent', () => {
  let component: EstReferenciasComponent;
  let fixture: ComponentFixture<EstReferenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstReferenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
