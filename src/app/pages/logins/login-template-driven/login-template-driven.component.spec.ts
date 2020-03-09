import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTemplateDrivenComponent } from './login-template-driven.component';
import { FormsModule } from '@angular/forms';

describe('LoginTemplateDrivenComponent', () => {
  let component: LoginTemplateDrivenComponent;
  let fixture: ComponentFixture<LoginTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTemplateDrivenComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
