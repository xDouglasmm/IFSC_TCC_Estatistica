import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomasRetaComponent } from './axiomas-reta.component';

describe('AxiomasRetaComponent', () => {
  let component: AxiomasRetaComponent;
  let fixture: ComponentFixture<AxiomasRetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomasRetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomasRetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
