import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayDynamicBoldComponent } from './say-dynamic-bold.component';

describe('SayDynamicBoldComponent', () => {
  let component: SayDynamicBoldComponent;
  let fixture: ComponentFixture<SayDynamicBoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayDynamicBoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayDynamicBoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
