import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicaoAnguloComponent } from './definicao-angulo.component';

describe('DefinicaoAnguloComponent', () => {
  let component: DefinicaoAnguloComponent;
  let fixture: ComponentFixture<DefinicaoAnguloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicaoAnguloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicaoAnguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
