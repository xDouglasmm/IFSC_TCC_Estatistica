import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadoCompreendidoComponent } from './lado-compreendido.component';

describe('LadoCompreendidoComponent', () => {
  let component: LadoCompreendidoComponent;
  let fixture: ComponentFixture<LadoCompreendidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadoCompreendidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadoCompreendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
