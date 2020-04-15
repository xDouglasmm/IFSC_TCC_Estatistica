import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiRetaComponent } from './semi-reta.component';

describe('SemiRetaComponent', () => {
  let component: SemiRetaComponent;
  let fixture: ComponentFixture<SemiRetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiRetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiRetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
