import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  standalone: false,
  styleUrl: './padre-deportes.css',
  templateUrl: './padre-deportes.html',
})
export class PadreDeportes {
  public deportes: Array<string>;
  public mensaje!: string;

  constructor() {
    this.deportes = [
      "Curling",
      "Dardos",
      "football",
      "basketball"
    ]
  }

  //METODO PARA ENVIAR AL HIJO
  seleccionarFavoritoPadre(event: string): void {
    console.log("Leyendo padre");
    this.mensaje = "Su deporte favorito es: " + event
  }
}
