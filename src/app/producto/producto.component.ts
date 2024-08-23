import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

class Producto {

}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [JsonPipe, CurrencyPipe],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() producto: any;
  @Input() iconoBoton = "🛒";
  @Output() accionClick = new EventEmitter<object>();

  accionPresionada() {
    this.accionClick.emit(this.producto);
  }
}
