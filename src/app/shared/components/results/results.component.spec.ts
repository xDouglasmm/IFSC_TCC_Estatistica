import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResultadoComponent } from './results.component';

describe('ListaResultadoComponent', () => {
  let component: ListaResultadoComponent;
  let fixture: ComponentFixture<ListaResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
