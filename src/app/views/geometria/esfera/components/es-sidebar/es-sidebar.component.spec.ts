import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsSidebarComponent } from './es-sidebar.component';

describe('EsSidebarComponent', () => {
  let component: EsSidebarComponent;
  let fixture: ComponentFixture<EsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
