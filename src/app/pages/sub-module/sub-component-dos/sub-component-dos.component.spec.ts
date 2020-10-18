import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponentDosComponent } from './sub-component-dos.component';

describe('SubComponentDosComponent', () => {
  let component: SubComponentDosComponent;
  let fixture: ComponentFixture<SubComponentDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComponentDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComponentDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
