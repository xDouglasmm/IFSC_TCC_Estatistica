import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulosInternosComponent } from './angulos-internos.component';

describe('AngulosInternosComponent', () => {
  let component: AngulosInternosComponent;
  let fixture: ComponentFixture<AngulosInternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulosInternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
