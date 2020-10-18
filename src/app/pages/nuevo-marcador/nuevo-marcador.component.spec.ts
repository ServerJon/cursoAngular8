import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMarcadorComponent } from './nuevo-marcador.component';

describe('NuevoMarcadorComponent', () => {
  let component: NuevoMarcadorComponent;
  let fixture: ComponentFixture<NuevoMarcadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoMarcadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoMarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
