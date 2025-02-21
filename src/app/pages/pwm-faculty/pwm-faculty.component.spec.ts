import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwmFacultyComponent } from './pwm-faculty.component';

describe('PwmFacultyComponent', () => {
  let component: PwmFacultyComponent;
  let fixture: ComponentFixture<PwmFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwmFacultyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwmFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
