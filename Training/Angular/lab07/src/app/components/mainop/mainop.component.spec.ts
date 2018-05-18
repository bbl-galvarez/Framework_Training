import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainopComponent } from './mainop.component';

describe('MainopComponent', () => {
  let component: MainopComponent;
  let fixture: ComponentFixture<MainopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
