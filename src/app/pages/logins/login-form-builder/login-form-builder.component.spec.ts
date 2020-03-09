import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormBuilderComponent } from './login-form-builder.component';

describe('LoginFormBuilderComponent', () => {
  let component: LoginFormBuilderComponent;
  let fixture: ComponentFixture<LoginFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormBuilderComponent ],
      imports: [ ReactiveFormsModule ]
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

  it('should have <p> with "login-form-builder works!"', () => {
    let loginFormElement: HTMLElement = fixture.nativeElement;
    let p = loginFormElement.querySelector('p');
    expect(p.textContent).toEqual('login-form-builder works!');
  });
});
