import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  standalone: false,
  styleUrl: './padre-deportes.css',
  templateUrl: './padre-deportes.html',
})
export class PadreDeportes {
  public deportes: Array<String>;

  constructor() {
    this.deportes = [
      "Curling",
      "Dardos",
      "football",
      "basketball"
    ]
  }
}
