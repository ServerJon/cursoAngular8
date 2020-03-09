import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { InfogithubComponent } from './infogithub.component';

describe('InfogithubComponent', () => {
  let component: InfogithubComponent;
  let fixture: ComponentFixture<InfogithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfogithubComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfogithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
