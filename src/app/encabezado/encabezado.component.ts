import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CuitPipe } from '../cuit.pipe';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [UpperCasePipe, JsonPipe, CuitPipe],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  app = {
    nombre: "Mercado Libre",
    version: "1.0"
  };
  lista = [3, 4, 5, 6];

  constructor() {
    new CuitPipe().transform("2829839482934");
  }
}
