import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnTroncoConeComponent } from './cn-tronco-cone.component';

describe('CnTroncoConeComponent', () => {
  let component: CnTroncoConeComponent;
  let fixture: ComponentFixture<CnTroncoConeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnTroncoConeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnTroncoConeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
