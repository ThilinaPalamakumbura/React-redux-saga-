import { takeEvery,put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProductList);

}

function* getProductList() {
    let data = yield fetch("http://localhost:3505/productList");
    data = yield data.json();
    yield put({type:SET_PRODUCT_LIST,data})


}
export default productSaga;
