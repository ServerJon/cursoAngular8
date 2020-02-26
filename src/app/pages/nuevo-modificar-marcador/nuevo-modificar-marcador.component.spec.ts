import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoModificarMarcadorComponent } from './nuevo-modificar-marcador.component';

describe('NuevoModificarMarcadorComponent', () => {
  let component: NuevoModificarMarcadorComponent;
  let fixture: ComponentFixture<NuevoModificarMarcadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoModificarMarcadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoModificarMarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
