import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-lista-productos-component',
  standalone: false,
  styleUrl: './lista-productos-component.css',
  templateUrl: './lista-productos-component.html',
})
export class ListaProductosComponent {
  public producto: Producto;
  public listaProductos: Array<Producto>;

  constructor() {
    this.producto = new Producto(
      "camisa",
      "https://www.google.com/aclk?sa=L&ai=DChsSEwiRt-uots2XAxVxgFAGHdNBKSAYACICCAEQBRoCZGc&co=1&ase=2&gclid=Cj0KCQjw6ObWBhDDARIsAFdfcUjCkiC2I7PvUOp34KHK6SM2UyF_ikLTp79kaz6G6d7McRm9vJhMmAsaAreJEALw_wcB&cid=CAASlwHkaPi0Udg7alAW6IEaP4R4eDCJ5clTsvGgpqIifxj6aLVT8rxMBQIwvBGFyqfRT5R6nidaZKOKy9n3YNShpUdLgWWE4p2ThVHwNwTx2nQypijOJ72qzbr7fCKY4HpOU3mBO1HfifxivNC2Fvc52LLfbdxo01FdzBugYAMH-CzoQHRll4m0YTt9zUnyYJbF39QgG-PIVCzN&cce=2&category=acrcp_v1_32&sig=AOD64_0z62J_p9YKemyEaZJS-IAqX26qYQ&ctype=5&q=&nis=4&ved=2ahUKEwib3OOots2XAxUsa0EAHfOnLuoQ5bgDKAB6BAgPEBc&adurl=",
      100
    );
    this.listaProductos = Array<Producto>();
    this.listaProductos = [
      new Producto(
        "Nike Air Jordan",
        "https://images.zapantojos.com/media/2022/07/39253d37.jpg",
        150
      ),
      new Producto(
        "Nike Air Mag",
        "https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg",
        1900
      ),	  
      new Producto(
        "New Balance 998",
        "https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg",
        140
      ),
      new Producto(
        "https://jhayber.com/documents/images/products/63638-850-1.jpg",
        "J-Hayber Olimpo",
        60
      ),
      new Producto(
        "Cangrejeras",
        "https://tonipons.com/cdn/shop/files/CALA_CRISTAL__0.webp",
        10
      )
    ]
  }
}
