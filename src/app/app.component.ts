import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'PWM';

  constructor (private titleService: Title ,private metaService: Meta){

  }

  ngOnInit(): void {

    // Título de la página
    this.titleService.setTitle('Private Wealth Management Institute | Educación de Élite para Banqueros y Family Offices');

    
    //Meta Description
    this.metaService.updateTag({name:'description', content: 'Inscríbete en nuestros programas de formación y conviértete en un experto en Wealth Management. Aprende con los mejores y lleva tu carrera a otro nivel. ¡Comienza ahora!'});

    //Meta Keywords
    this.metaService.updateTag({name:'keywords', content: 'Private Banking, Wealth Management, Family Offices, Cursos Financieros, Educación Ejecutiva'})


  }


}
