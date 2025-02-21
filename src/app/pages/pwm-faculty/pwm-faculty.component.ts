import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-pwm-faculty',
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './pwm-faculty.component.html',
  styleUrl: './pwm-faculty.component.css'
})
export class PwmFacultyComponent {

}
