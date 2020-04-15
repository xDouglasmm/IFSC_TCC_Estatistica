import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresLadosComponent } from './tres-lados.component';

describe('TresLadosComponent', () => {
  let component: TresLadosComponent;
  let fixture: ComponentFixture<TresLadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresLadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresLadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
