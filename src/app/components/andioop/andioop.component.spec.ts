import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndIOopComponent } from './andioop.component';

describe('AndioopComponent', () => {
  let component: AndIOopComponent;
  let fixture: ComponentFixture<AndIOopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndIOopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndIOopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
