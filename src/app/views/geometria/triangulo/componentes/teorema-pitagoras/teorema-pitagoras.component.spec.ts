import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaPitagorasComponent } from './teorema-pitagoras.component';

describe('TeoremaPitagorasComponent', () => {
  let component: TeoremaPitagorasComponent;
  let fixture: ComponentFixture<TeoremaPitagorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeoremaPitagorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoremaPitagorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
