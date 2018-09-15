import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroseComponent } from './herose.component';

describe('HeroseComponent', () => {
  let component: HeroseComponent;
  let fixture: ComponentFixture<HeroseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
