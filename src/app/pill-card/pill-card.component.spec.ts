import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillCardComponent } from './pill-card.component';

describe('PillCardComponent', () => {
  let component: PillCardComponent;
  let fixture: ComponentFixture<PillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
