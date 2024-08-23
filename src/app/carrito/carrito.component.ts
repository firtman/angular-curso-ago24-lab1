import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
   @Input({alias: 'cart', required: true}) contenido : object[] = [];

   constructor() {
      // variables y funciones que NO sean de Angular
    
   }

   ngOnInit() {
      // todo lo que es Angular está inicializado
   }



}
