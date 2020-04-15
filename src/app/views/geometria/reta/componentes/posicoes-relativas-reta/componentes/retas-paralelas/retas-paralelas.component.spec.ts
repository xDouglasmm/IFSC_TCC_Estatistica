import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetasParalelasComponent } from './retas-paralelas.component';

describe('RetasParalelasComponent', () => {
  let component: RetasParalelasComponent;
  let fixture: ComponentFixture<RetasParalelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetasParalelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetasParalelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
