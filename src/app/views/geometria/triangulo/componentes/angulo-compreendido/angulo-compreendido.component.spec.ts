import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnguloCompreendidoComponent } from './angulo-compreendido.component';

describe('AnguloCompreendidoComponent', () => {
  let component: AnguloCompreendidoComponent;
  let fixture: ComponentFixture<AnguloCompreendidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnguloCompreendidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnguloCompreendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
