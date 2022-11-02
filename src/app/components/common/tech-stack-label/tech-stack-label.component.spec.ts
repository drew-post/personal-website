import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackLabelComponent } from './tech-stack-label.component';

describe('TechStackLabelComponent', () => {
  let component: TechStackLabelComponent;
  let fixture: ComponentFixture<TechStackLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStackLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStackLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
