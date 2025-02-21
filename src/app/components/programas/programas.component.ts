import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgramasService } from '../../services/programas.service';

@Component({
  selector: 'app-programas',
  imports: [CommonModule,RouterLink],
  templateUrl: './programas.component.html',
  styleUrl: './programas.component.css'
})
export class ProgramasComponent implements OnInit{


  constructor(public programasService: ProgramasService){ }

  ngOnInit(){
    
  }

  
}
