import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndioopComponent } from './andioop.component';

describe('AndioopComponent', () => {
  let component: AndioopComponent;
  let fixture: ComponentFixture<AndioopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndioopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndioopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
