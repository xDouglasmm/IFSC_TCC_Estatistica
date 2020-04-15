import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsecutivosAnguloComponent } from './consecutivos-angulo.component';

describe('ConsecutivosAnguloComponent', () => {
  let component: ConsecutivosAnguloComponent;
  let fixture: ComponentFixture<ConsecutivosAnguloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsecutivosAnguloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsecutivosAnguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
