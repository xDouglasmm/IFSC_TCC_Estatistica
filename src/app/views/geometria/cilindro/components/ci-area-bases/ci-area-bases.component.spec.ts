import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiAreaBasesComponent } from './ci-area-bases.component';

describe('CiAreaBasesComponent', () => {
  let component: CiAreaBasesComponent;
  let fixture: ComponentFixture<CiAreaBasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiAreaBasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiAreaBasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
