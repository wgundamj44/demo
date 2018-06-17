import { SagaIterator } from 'redux-saga';
import { call, put, Pattern, ForkEffect, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { IListQuery } from './defs';
import { IProduct } from '../products/defs';
import { getProducts } from '../../apis/products';
import { requestProductList, receiveProductList, RequestProductListAction } from './actions';
import { receiveProducts } from '../products/actions';

export function* fetchProductList(action: RequestProductListAction) {
    const { category } = action.payload;
    try {
        const items = yield call(getProducts);
        yield put(receiveProductList(category, items, null));
        yield put(receiveProducts(items, null));
    } catch (error) {
        yield put(receiveProductList(category, null, error));
    }
}

export function* watchFetchProducts(): SagaIterator {
    yield takeEvery(getType(requestProductList), fetchProductList);
}
