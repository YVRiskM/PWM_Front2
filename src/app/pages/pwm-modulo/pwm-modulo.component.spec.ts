import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwmModuloComponent } from './pwm-modulo.component';

describe('PwmModuloComponent', () => {
  let component: PwmModuloComponent;
  let fixture: ComponentFixture<PwmModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwmModuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwmModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
