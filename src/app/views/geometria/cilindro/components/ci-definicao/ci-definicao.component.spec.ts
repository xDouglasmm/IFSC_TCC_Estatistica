import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiDefinicaoComponent } from './ci-definicao.component';

describe('CiDefinicaoComponent', () => {
  let component: CiDefinicaoComponent;
  let fixture: ComponentFixture<CiDefinicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiDefinicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiDefinicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
