import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicoesRelativasRetaComponent } from './posicoes-relativas-reta.component';

describe('PosicoesRelativasRetaComponent', () => {
  let component: PosicoesRelativasRetaComponent;
  let fixture: ComponentFixture<PosicoesRelativasRetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicoesRelativasRetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicoesRelativasRetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
