import { Component, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/comic';
//IMPORTAMOS LA LIBRERIA Y LE DAMOS UN ALIAS PARA TRABAJAR
import * as XSLX from 'xlsx'

@Component({
  selector: 'app-comics-excel-component',
  standalone: false,
  styleUrl: './comics-excel-component.css',
  templateUrl: './comics-excel-component.html',
})
export class ComicsExcelComponent {
  public arrayComics: Array<Comic>;

  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = []
  }

  cargarComics(): void {
    let path = "./assets/comics.xlsx";
    fetch(path).then(response => response.arrayBuffer())
      .then((buffer) => {
        //leer el buffer y transformarlo a libre de excel
        let workbook = XSLX.read(buffer, {type: "array"});
        //para recuperar las hojas del libro se hace por name
        //recuperamos el name de la hoja
        let hojaName = workbook.SheetNames[0];
        //recuperamos la hoja
        let hoja = workbook.Sheets[hojaName];
        //como tiene formato de tabla(es decir que tiene cabeceras) lo transformamos a json
        let data = XSLX.utils.sheet_to_json(hoja);
        console.log(data)
        this.arrayComics = data.map((c: any) => new Comic(c.nombre, c.imagen, c.descripcion));
        this._cdr.detectChanges();
      })
  }
}
