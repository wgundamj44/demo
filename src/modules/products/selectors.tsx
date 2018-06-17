import { createSelector } from 'reselect';
import { IProductState } from './reducer';
import { IProduct } from './defs';

export const getProducts = (state) => state.products;

export const createProductSelector = (
    productIdSelector: (props: any) => string,
) => createSelector(
    productIdSelector,
    getProducts,
    (id: string, products: IProductState): IProduct | null => {
        return products[id] || null;
    },
);
