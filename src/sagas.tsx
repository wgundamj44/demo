import { all, call } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { watchFetchProducts } from './modules/product_list/sagas';
import { watchFetchProduct } from './modules/products/sagas';

export default function* rootSaga() {
  console.log('here');
  //  yield all([watchFetchProducts, watchFetchProduct]);
  yield [watchFetchProducts(), watchFetchProduct()];
}
