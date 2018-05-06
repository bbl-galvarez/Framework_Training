import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayLightComponent } from './say-light.component';

describe('SayLightComponent', () => {
  let component: SayLightComponent;
  let fixture: ComponentFixture<SayLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
