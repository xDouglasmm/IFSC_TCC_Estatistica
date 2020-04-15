import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresVerticesComponent } from './tres-vertices.component';

describe('TresVerticesComponent', () => {
  let component: TresVerticesComponent;
  let fixture: ComponentFixture<TresVerticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresVerticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresVerticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
