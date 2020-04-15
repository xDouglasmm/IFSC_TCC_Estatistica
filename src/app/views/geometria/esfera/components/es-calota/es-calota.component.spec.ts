import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsCalotaComponent } from './es-calota.component';

describe('EsCalotaComponent', () => {
  let component: EsCalotaComponent;
  let fixture: ComponentFixture<EsCalotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsCalotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsCalotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
