import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoRetaComponent } from './segmento-reta.component';

describe('SegmentoRetaComponent', () => {
  let component: SegmentoRetaComponent;
  let fixture: ComponentFixture<SegmentoRetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoRetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoRetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
