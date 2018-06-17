import { getType } from 'typesafe-actions';
import * as productActions from './actions';
import { IProduct } from './defs';

export interface IProductState {
  [id: string]: IProduct;
}

export const productReducer = (state: IProductState = {}, action) => {
  switch (action.type) {
    case getType(productActions.receiveProducts): {
      const { products, error } = action.payload;
      if (error) {
        return state;
      }
      return {
        ...state, ...products.reduce((pre, product) => ({
          ...pre, [product.id]: product,
        }), {}),
      };
    }
    case getType(productActions.receiveProduct): {
      const { product, error } = action.payload;
      if (error) {
        return state;
      }
      return { ...state, [product.id]: product };
    }
    default:
      return state;
  }
};
