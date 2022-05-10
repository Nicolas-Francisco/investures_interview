import { Component, Input, OnInit } from '@angular/core';
import { MainRemedio } from '@models/pastillero.model';
import { MainProduct } from '@models/product.model';

@Component({
  selector: 'app-pill-card',
  templateUrl: './pill-card.component.html',
  styleUrls: ['./pill-card.component.scss']
})
export class PillCardComponent implements OnInit {
  @Input() remedio: MainRemedio;
  public text_pillsleft: string;
  public text_daysleft: string;

  constructor() {
    this.remedio = {
      id: 0,
      product: {
        id: 0,
        name: "Remedy",
        description: null,
        price: 0,
        concentration: "75mg",
        prescriptionType: null,
        package: null,
        composition: null,
        posology: null,
        display: null,
        contraindications: null,
        indications: null,
        containerQuantity: null,
        container: null,
        availability: {
          status: "",
        },
        imagesUrl: "https://image.shutterstock.com/image-vector/vectorped-image-meme-asking-hug-600w-2010666932.jpg",
        format: "",
        activePrinciple: "",
        laboratory: "",
      },
      starting_date: new Date(),
      amount_left: 0,
    };

    this.text_pillsleft = "";
    this.text_daysleft = "`Para ${this.remedio.amount_left} días`";
  }

  ngOnInit(): void {
    // se calcula la cantidad de comprimidos que quedan por consumir

    // testing para distintos días del último mes
    // let diffInMs = Math.abs(this.remedio.starting_date.getTime() - new Date("2022-03-20T15:00:00Z").getTime());

    // Para calcular la cantidad de pastillas que quedan a día de hoy
    let diffInMs = Math.abs(this.remedio.starting_date.getTime() - new Date().getTime());
    let diffsInDays = diffInMs / (1000 * 60 * 60 * 24);
    let pills_left = this.remedio.amount_left - Math.floor(diffsInDays);

    // evitamos que se queden pastillas negativas y evitamos contar pastillas que ya no se
    // necesitan (que se acabaron antes de la fecha de compra)
    if (pills_left < 0) {
      pills_left = 0;
    }

    // se calcula el texto que se va a mostrar en la tarjeta
    this.text_pillsleft = `Quedan ${pills_left} comprimidos`;
    this.text_daysleft = `Para ${pills_left} días`;
  }

}
