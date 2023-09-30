import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeErrorControlComponent } from './mensaje-error-control.component';

describe('MensajeErrorControlComponent', () => {
  let component: MensajeErrorControlComponent;
  let fixture: ComponentFixture<MensajeErrorControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeErrorControlComponent]
    });
    fixture = TestBed.createComponent(MensajeErrorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
