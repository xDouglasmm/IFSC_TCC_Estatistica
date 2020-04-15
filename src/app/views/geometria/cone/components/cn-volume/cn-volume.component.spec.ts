import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnVolumeComponent } from './cn-volume.component';

describe('CnVolumeComponent', () => {
  let component: CnVolumeComponent;
  let fixture: ComponentFixture<CnVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
