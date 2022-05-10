import { MainProduct } from "./product.model";

export interface Pastillero{
  remedios: MainRemedio[];
}

export interface MainRemedio{
  id: number;
  product: MainProduct;
  amount_left: number;
}

// clase propia para poder manejar el pastillero
// y poder actualizarlo
