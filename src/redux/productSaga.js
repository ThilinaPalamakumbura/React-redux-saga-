import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST, SET_PRODUCT_SEARCH } from "./constant";

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProductList);
    yield takeEvery(PRODUCT_SEARCH, getProductSearch);

}

function* getProductList() {
    let data1 = yield fetch("http://localhost:3505/productList");
    data1 = yield data1.json();
    yield put({ type: SET_PRODUCT_LIST, data1 })
}


function* getProductSearch(data) {
    let data1 = yield fetch(`http://localhost:3505/productList?q=${data.query}`);
    
    console.log(data.query);
    
    data1 = yield data1.json();
    yield put({ type: SET_PRODUCT_LIST, data1 })
}


export default productSaga;