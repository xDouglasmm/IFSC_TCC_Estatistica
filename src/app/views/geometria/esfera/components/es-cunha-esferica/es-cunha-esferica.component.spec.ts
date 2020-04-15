import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsCunhaEsfericaComponent } from './es-cunha-esferica.component';

describe('EsCunhaEsfericaComponent', () => {
  let component: EsCunhaEsfericaComponent;
  let fixture: ComponentFixture<EsCunhaEsfericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsCunhaEsfericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsCunhaEsfericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
