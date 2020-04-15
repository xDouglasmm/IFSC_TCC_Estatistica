import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpostosAnguloComponent } from './opostos-angulo.component';

describe('OpostosAnguloComponent', () => {
  let component: OpostosAnguloComponent;
  let fixture: ComponentFixture<OpostosAnguloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpostosAnguloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpostosAnguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
