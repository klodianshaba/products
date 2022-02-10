import {RatingModel} from "./rating.model";

export interface ProductModel{
  id: number,
  title: string,
  price: string,
  description: string,
  category: string,
  image: string,
  rating: RatingModel,
}
