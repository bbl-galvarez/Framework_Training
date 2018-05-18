import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmoperationsComponent } from './atmoperations.component';

describe('AtmoperationsComponent', () => {
  let component: AtmoperationsComponent;
  let fixture: ComponentFixture<AtmoperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmoperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
