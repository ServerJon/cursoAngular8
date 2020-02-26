import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMarcadorComponent } from './modificar-marcador.component';

describe('ModificarMarcadorComponent', () => {
  let component: ModificarMarcadorComponent;
  let fixture: ComponentFixture<ModificarMarcadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarMarcadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
