import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteUnoComponent } from './componente-uno.component';

describe('ComponenteUnoComponent', () => {
  let component: ComponenteUnoComponent;
  let fixture: ComponentFixture<ComponenteUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
