import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListaProductosComponent } from "./lista-productos/lista-productos.component";
import { CarritoComponent } from "./carrito/carrito.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, 
    ListaProductosComponent, CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  carrito: object[] = [];

  agregar(p: object) {
    this.carrito.push(p);
  }
}
