import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnguloComponent } from './angulo.component';

describe('AnguloComponent', () => {
  let component: AnguloComponent;
  let fixture: ComponentFixture<AnguloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnguloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
