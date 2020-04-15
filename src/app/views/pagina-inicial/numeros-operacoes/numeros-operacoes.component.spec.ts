import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosOperacoesComponent } from './numeros-operacoes.component';

describe('NumerosOperacoesComponent', () => {
  let component: NumerosOperacoesComponent;
  let fixture: ComponentFixture<NumerosOperacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerosOperacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
