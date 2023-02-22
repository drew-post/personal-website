import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonHeaderComponent } from './nav-button-header.component';

describe('NavButtonHeaderComponent', () => {
  let component: NavButtonHeaderComponent;
  let fixture: ComponentFixture<NavButtonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavButtonHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavButtonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
