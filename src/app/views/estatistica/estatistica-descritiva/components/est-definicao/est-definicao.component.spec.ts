import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstDefinicaoComponent } from './est-definicao.component';

describe('EstDefinicaoComponent', () => {
  let component: EstDefinicaoComponent;
  let fixture: ComponentFixture<EstDefinicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstDefinicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstDefinicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
