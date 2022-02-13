export interface IMainGroupProps {
  title: string;
  products: IProduct[]
}

export interface IProduct {
  id?: string,
  img: string,
  title: string,
  price: string,
  rating: string,
  discount: number
}
