import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsDefinicaoComponent } from './es-definicao.component';

describe('EsDefinicaoComponent', () => {
  let component: EsDefinicaoComponent;
  let fixture: ComponentFixture<EsDefinicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsDefinicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsDefinicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
