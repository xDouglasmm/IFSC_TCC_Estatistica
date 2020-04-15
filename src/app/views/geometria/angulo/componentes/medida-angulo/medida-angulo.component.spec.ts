import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidaAnguloComponent } from './medida-angulo.component';

describe('MedidaAnguloComponent', () => {
  let component: MedidaAnguloComponent;
  let fixture: ComponentFixture<MedidaAnguloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidaAnguloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidaAnguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
