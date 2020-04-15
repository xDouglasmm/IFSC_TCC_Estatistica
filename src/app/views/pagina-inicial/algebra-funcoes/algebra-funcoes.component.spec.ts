import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgebraFuncoesComponent } from './algebra-funcoes.component';

describe('AlgebraFuncoesComponent', () => {
  let component: AlgebraFuncoesComponent;
  let fixture: ComponentFixture<AlgebraFuncoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgebraFuncoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgebraFuncoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
