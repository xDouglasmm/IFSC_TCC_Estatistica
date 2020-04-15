import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetasConcorrentesComponent } from './retas-concorrentes.component';

describe('RetasConcorrentesComponent', () => {
  let component: RetasConcorrentesComponent;
  let fixture: ComponentFixture<RetasConcorrentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetasConcorrentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetasConcorrentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
