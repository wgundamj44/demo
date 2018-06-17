import { createSelector } from 'reselect';
import { getProducts } from '../products/selectors';
import { IProductState } from '../products/reducer';
import { IProduct } from '../products/defs';
import { IProductListState } from './reducer';

export const getProductLists = (state) => state.productList;

export const createCategoryProductIdsSelector = (
  categorySelector: (state: any, props: any) => string,
) => createSelector(
  categorySelector,
  getProductLists,
  (category: string, productLists: IProductListState): string[] | null => {
    return productLists ? productLists[category] : null;
  },
  );

export const createCategoryProductsSelector = (
  categorySelector: (state: any, props: any) => string,
) => createSelector(
  categorySelector,
  getProductLists,
  getProducts,
  (category: string, productLists: IProductListState, products: IProductState): IProduct[] | null => {
    const productList = productLists[category];
    if (!productList) {
      return null;
    }
    const ret = [];
    productList.forEach((id) => {
      if (products[id]) {
        ret.push(products[id]);
      }
    });
    return ret;
  },
  );
