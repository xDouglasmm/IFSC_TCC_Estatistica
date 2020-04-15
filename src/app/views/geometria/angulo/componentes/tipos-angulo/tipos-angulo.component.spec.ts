import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposAnguloComponent } from './tipos-angulo.component';

describe('TiposAnguloComponent', () => {
  let component: TiposAnguloComponent;
  let fixture: ComponentFixture<TiposAnguloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposAnguloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposAnguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
