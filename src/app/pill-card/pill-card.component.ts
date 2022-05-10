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
    // se calcula la cantidad de comprimidos que quedan desde el inicio
    // del tratamiento
    let diffInMs = Math.abs(this.remedio.starting_date.getTime() - new Date().getTime());
    let diffsInDays = diffInMs / (1000 * 60 * 60 * 24);
    let pills_left = this.remedio.amount_left - Math.floor(diffsInDays);
    this.text_pillsleft = `Quedan ${pills_left} comprimidos`;
    this.text_daysleft = `Para ${pills_left} días`;
  }

}
