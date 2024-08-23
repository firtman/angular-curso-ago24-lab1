import { Component, EventEmitter, Output } from '@angular/core';
import { ProductoComponent } from "../producto/producto.component";

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  @Output() carritoAdd = new EventEmitter<object>();

  productos = [
    { id: 1, nombre: "TV 55' Samsung", precio: 1000, stock: 45, color: 'blue' },
    { id: 2, nombre: "Laptop HP 14''", precio: 750, stock: 130 },
    { id: 3, nombre: "Smartphone iPhone 13", precio: 1200, stock: 20, color: 'salmon' },
    { id: 4, nombre: "Consola PlayStation 5", precio: 1000, stock: 15 },
    { id: 5, nombre: "Auriculares Bose QC35", precio: 300, stock: 50, color: 'red' },
    { id: 6, nombre: "Tablet Samsung Galaxy Tab S7", precio: 500, stock: 25 },
    { id: 7, nombre: "Reloj Inteligente Apple Watch Series 7", precio: 400, stock: 140 },
    { id: 8, nombre: "Cámara Canon EOS R5", precio: 3500, stock: 10 },
    { id: 9, nombre: "Bicicleta Eléctrica Xiaomi", precio: 800, stock: 18 },
    { id: 10, nombre: "Altavoz Inteligente Amazon Echo", precio: 100, stock: 60 },
    { id: 11, nombre: "Monitor LG 27'' 4K", precio: 350, stock: 35 },
    { id: 12, nombre: "Impresora Multifunción HP", precio: 150, stock: 122 },
    { id: 13, nombre: "Cafetera Nespresso Vertuo", precio: 250, stock: 12 },
    { id: 14, nombre: "Aspiradora Robot Roomba", precio: 550, stock: 0 },
    { id: 15, nombre: "Router Wi-Fi Mesh TP-Link", precio: 180, stock: 33 }
]
productosFiltrados = this.productos;

filtroStock(activado: boolean) {  
  if (activado) {
    this.productosFiltrados 
      = this.productos.filter(p=>p.stock>50);
  } else {
    this.productosFiltrados = this.productos;
  }
}
  agregarAlCarrito(producto: any) {
    this.carritoAdd.emit(producto);
  }
}
