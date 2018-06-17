import { StateType, getType } from 'typesafe-actions';
import * as listActions from './actions';

export interface IProductListState {
  [category: string]: string[];
}
export const productListReducer = (state: { [key: string]: string[] } = {}, action) => {
  switch (action.type) {
    case getType(listActions.receiveProductList): {
      const { category, products, error } = action.payload;
      if (error) {
        return state;
      }
      return { ...state, [category]: products.map((p) => p.id) };
    }
    default:
      return state;
  }
};
