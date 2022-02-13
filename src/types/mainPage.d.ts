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

export interface ICategoryCard {
  width: number;
  height: number;
  background: string;
  title: string;
  banner: string | null;
  promo?: string;
  titleSize?: number
}

export interface IBlogCardProps {
  id?: string
  img: string,
  title: string,
  text: string
}
