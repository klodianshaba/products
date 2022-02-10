import {RatingModel} from "./rating.model";

export interface ProductInterface {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: RatingModel,
}

export class ProductModel implements ProductInterface{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingModel;

  constructor(private config?: Partial<ProductInterface>) {
    Object.assign(this,config);
  }
}
