import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormBuilderComponent } from './login-form-builder.component';

describe('LoginFormBuilderComponent', () => {
  let component: LoginFormBuilderComponent;
  let fixture: ComponentFixture<LoginFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
