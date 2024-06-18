export interface IProductSizes {
  id: number;
  name: string;
  weight: string | null;
  volume: string | null;
  quantity: string | null;
  price: number;
}

export interface IProducts {
  id: number;
  name: string;
  category: number;
  composition: string | null;
  weight: string | null;
  volume: string | null;
  quantity: string | null;
  price: number | null;
  sizes: IProductSizes[] | null;
}
