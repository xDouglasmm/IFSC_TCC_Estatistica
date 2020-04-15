import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiElementosComponent } from './ci-elementos.component';

describe('CiElementosComponent', () => {
  let component: CiElementosComponent;
  let fixture: ComponentFixture<CiElementosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiElementosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
