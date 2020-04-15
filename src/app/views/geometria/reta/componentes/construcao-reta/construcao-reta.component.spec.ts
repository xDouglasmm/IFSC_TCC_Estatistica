import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrucaoRetaComponent } from './construcao-reta.component';

describe('ConstrucaoRetaComponent', () => {
  let component: ConstrucaoRetaComponent;
  let fixture: ComponentFixture<ConstrucaoRetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstrucaoRetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrucaoRetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
