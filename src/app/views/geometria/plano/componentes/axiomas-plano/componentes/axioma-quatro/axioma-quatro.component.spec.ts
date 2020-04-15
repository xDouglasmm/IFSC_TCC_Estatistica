import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomaQuatroComponent } from './axioma-quatro.component';

describe('AxiomaQuatroComponent', () => {
  let component: AxiomaQuatroComponent;
  let fixture: ComponentFixture<AxiomaQuatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomaQuatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomaQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
