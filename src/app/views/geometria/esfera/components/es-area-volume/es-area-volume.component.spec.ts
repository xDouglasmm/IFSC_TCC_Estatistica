import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsAreaVolumeComponent } from './es-area-volume.component';

describe('EsAreaVolumeComponent', () => {
  let component: EsAreaVolumeComponent;
  let fixture: ComponentFixture<EsAreaVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsAreaVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsAreaVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
