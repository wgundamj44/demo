import { createAction, ActionType, getType } from 'typesafe-actions';
import { IProduct } from './defs';

export const requestProduct = createAction('products/requestProduct', (resolve) => {
  return (id: string) => resolve({ id });
});

export type RequestProductAction = ActionType<typeof requestProduct>;

export const receiveProduct = createAction('products/receiveProduct', (resolve) => {
  return (product: IProduct | null, error: any) => resolve({ product, error });
});
export type ReceiveProductAction = ActionType<typeof receiveProduct>;

export const receiveProducts = createAction('products/receiveProducts', (resolve) => {
  return (products: IProduct[] | null, error: any) => resolve({ products, error });
});
export type ReceiveProductsAction = ActionType<typeof receiveProducts>;
