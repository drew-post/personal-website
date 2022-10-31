import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakesaleAppComponent } from './bakesale-app.component';

describe('BakesaleAppComponent', () => {
  let component: BakesaleAppComponent;
  let fixture: ComponentFixture<BakesaleAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakesaleAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakesaleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
