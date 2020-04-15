import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsVolumeComponent } from './es-volume.component';

describe('EsVolumeComponent', () => {
  let component: EsVolumeComponent;
  let fixture: ComponentFixture<EsVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
