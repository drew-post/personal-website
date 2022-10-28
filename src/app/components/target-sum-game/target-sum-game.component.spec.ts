import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetSumGameComponent } from './target-sum-game.component';

describe('TargetSumGameComponent', () => {
  let component: TargetSumGameComponent;
  let fixture: ComponentFixture<TargetSumGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetSumGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetSumGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
