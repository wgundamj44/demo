export interface IProduct {
  id: string;
  name: string;
  description: string;
  like_count: number;
  comment_count: number;
  price: number;
  isSoldOut: boolean;
  shippingFee: string;
  image: string;
}
