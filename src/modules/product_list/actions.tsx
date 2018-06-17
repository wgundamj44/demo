import { createAction, ActionType, getType } from 'typesafe-actions';
import { IProduct } from '../products/defs';

export const requestProductList = createAction('product_list/requestProductList', (resolve) => {
    return (category: string) => resolve({ category });
});

export type RequestProductListAction = ActionType<typeof requestProductList>;

export const receiveProductList = createAction('product_list/receiveProductList', (resolve) => {
    return (category: string, products: IProduct[] | null, error: any) => resolve({ category, products, error });
});
export type ReceiveProductListAction = ActionType<typeof receiveProductList>;
