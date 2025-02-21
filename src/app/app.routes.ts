import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PwmComponent } from './pages/pwm/pwm.component';
import { PwmFacultyComponent } from './pages/pwm-faculty/pwm-faculty.component';
import { PwmModuloComponent } from './pages/pwm-modulo/pwm-modulo.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'pwm', component: PwmComponent},
    { path: 'faculty', component: PwmFacultyComponent},
    { path: 'modulo', component: PwmModuloComponent},
];
