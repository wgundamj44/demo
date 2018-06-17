import { takeEvery, put, call } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { SagaIterator } from 'redux-saga';
import { getProduct } from '../../apis/products';
import { requestProduct, receiveProduct, RequestProductAction } from './actions';

export function* fetchProduct(action: RequestProductAction) {
  const { id } = action.payload;
  try {
    const product = yield call(getProduct, id);
    yield put(receiveProduct(product, null));
  } catch (error) {
    yield put(receiveProduct(null, error));
  }
}

export function* watchFetchProduct() {
  yield takeEvery(getType(requestProduct), fetchProduct);
}
