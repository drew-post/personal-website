import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SygnomicsComponent } from './sygnomics.component';

describe('SygnomicsComponent', () => {
  let component: SygnomicsComponent;
  let fixture: ComponentFixture<SygnomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SygnomicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SygnomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
