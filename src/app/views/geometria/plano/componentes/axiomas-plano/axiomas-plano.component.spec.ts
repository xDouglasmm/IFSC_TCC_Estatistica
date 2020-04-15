import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomasPlanoComponent } from './axiomas-plano.component';

describe('AxiomasPlanoComponent', () => {
  let component: AxiomasPlanoComponent;
  let fixture: ComponentFixture<AxiomasPlanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomasPlanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomasPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
