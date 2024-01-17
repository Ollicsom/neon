import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiModalComponent } from './defi-modal.component';

describe('DefiModalComponent', () => {
  let component: DefiModalComponent;
  let fixture: ComponentFixture<DefiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefiModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
