type Product = {
  id: string;
  img: string;
  title: string;
  images?: {
    black: string;
    white: string;
    red: string;
  };
  size: Array<string>;
  star: JSX.Element;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string[];
  category: string;
};
