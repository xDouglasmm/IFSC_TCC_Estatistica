import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsElementosComponent } from './es-elementos.component';

describe('EsElementosComponent', () => {
  let component: EsElementosComponent;
  let fixture: ComponentFixture<EsElementosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsElementosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
