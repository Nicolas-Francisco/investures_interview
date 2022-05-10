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
  public left = 0;
  public text_pillsleft: string = `Quedan ${this.left} comprimidos`;
  public text_daysleft: string = `Para ${this.left} días`;

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
      amount_left: 0,
    };
  }

  ngOnInit(): void {
  }

}
