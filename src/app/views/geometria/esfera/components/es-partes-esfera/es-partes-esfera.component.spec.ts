import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsPartesEsferaComponent } from './es-partes-esfera.component';

describe('EsPartesEsferaComponent', () => {
  let component: EsPartesEsferaComponent;
  let fixture: ComponentFixture<EsPartesEsferaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsPartesEsferaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsPartesEsferaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
