export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IUser {
  address: IUserAddress;
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: 0;
}

export interface IUserAddress {
  geolocation: {
    lat: string;
    long: string;
  };
  city: string;
  street: string;
  number: string;
  zipcode: string;
}

export interface ICartItem {
  count: number;
  product: IProduct;
}
