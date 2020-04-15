import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiSidebarComponent } from './ci-sidebar.component';

describe('CiSidebarComponent', () => {
  let component: CiSidebarComponent;
  let fixture: ComponentFixture<CiSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
