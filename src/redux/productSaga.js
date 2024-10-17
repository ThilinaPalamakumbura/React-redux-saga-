import { takeEvery,put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProductList);

}

function* getProductList() {
    let data1 = yield fetch("http://localhost:3505/productList");
    data1 = yield data1.json();
    yield put({type:SET_PRODUCT_LIST,data1})
}
export default productSaga;
