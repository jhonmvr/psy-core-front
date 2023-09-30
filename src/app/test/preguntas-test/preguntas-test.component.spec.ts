import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasTestComponent } from './preguntas-test.component';

describe('PreguntasTestComponent', () => {
  let component: PreguntasTestComponent;
  let fixture: ComponentFixture<PreguntasTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreguntasTestComponent]
    });
    fixture = TestBed.createComponent(PreguntasTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
