import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  public total: number;
  public numeros!: Array<number>;

  constructor() {
    this.total = 0;
    let aux = [];

    for(let i = 0; i < 5; i++) {
      let aleatorio = Math.floor(Math.random() * 200) + 1;
      aux.push(aleatorio);
    }

    this.numeros = aux;
    console.log(this.numeros)
  }

  generarNumero(): void {
    let aleatorio = Math.floor(Math.random() * 200) + 1;
    this.numeros.push(aleatorio)
    console.log(this.numeros)
  }

  sumarNumero(event: number): void {
    this.total += event;
  }
}
