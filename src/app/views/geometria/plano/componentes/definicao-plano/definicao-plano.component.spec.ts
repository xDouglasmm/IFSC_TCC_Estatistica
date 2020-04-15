import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicaoPlanoComponent } from './definicao-plano.component';

describe('DefinicaoPlanoComponent', () => {
  let component: DefinicaoPlanoComponent;
  let fixture: ComponentFixture<DefinicaoPlanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicaoPlanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicaoPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
