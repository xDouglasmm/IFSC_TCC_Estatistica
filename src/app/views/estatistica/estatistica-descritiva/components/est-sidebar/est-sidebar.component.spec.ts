import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstSidebarComponent } from './est-sidebar.component';

describe('EstSidebarComponent', () => {
  let component: EstSidebarComponent;
  let fixture: ComponentFixture<EstSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
