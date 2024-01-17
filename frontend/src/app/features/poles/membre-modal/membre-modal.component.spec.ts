import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreModalComponent } from './membre-modal.component';

describe('MembreModalComponent', () => {
  let component: MembreModalComponent;
  let fixture: ComponentFixture<MembreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembreModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
