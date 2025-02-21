import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-pwm',
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './pwm.component.html',
  styleUrl: './pwm.component.css'
})
export class PwmComponent {
  
}
