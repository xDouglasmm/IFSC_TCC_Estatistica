import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomaUmComponent } from './axioma-um.component';

describe('AxiomaUmComponent', () => {
  let component: AxiomaUmComponent;
  let fixture: ComponentFixture<AxiomaUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomaUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomaUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
