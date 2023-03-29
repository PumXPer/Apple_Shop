export type Products = {
  id: number;
  name: string;
  price: number;
  color: string;
  category: string;
  image: URL;
  url: URL;
  qty: number;
};

export type Categories = {
  id: number;
  name: string;
  image: URL;
  cover: URL;
};

export type SearchData = {
  search?: string;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
