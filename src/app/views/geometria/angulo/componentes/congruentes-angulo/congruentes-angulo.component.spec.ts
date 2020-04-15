import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongruentesAnguloComponent } from './congruentes-angulo.component';

describe('CongruentesAnguloComponent', () => {
  let component: CongruentesAnguloComponent;
  let fixture: ComponentFixture<CongruentesAnguloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongruentesAnguloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongruentesAnguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
