import { put, takeEvery } from "redux-saga/effects";
import { addCustomersApi, deleteCustomersApi, getCustomersApi, updateCustomersApi } from "../fetchApi/CustomerApi";
import * as types from "../constant"

function* getCustomerSaga() {
    try {
        const res = yield getCustomersApi();
        yield put({
            type: types.GET_CUSTOMER_SUCCESS,
            payload: res.content
        })
    } catch (error) {
        yield put({
            type: types.GET_CUSTOMER_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addCustomerSaga({ payload }) {
    try {
        yield addCustomersApi(payload);
        yield getCustomerSaga();
        yield put({
            type: types.POST_CUSTOMER_SUCCESS
        })

    } catch (error) {
        yield put({
            type: types.POST_CUSTOMER_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* deleteCustomerSaga({ payload }) {
    try {
        yield deleteCustomersApi(payload);
        yield getCustomerSaga();
        yield put({
            type: types.DELETE_CUSTOMER_SUCCESS
        })

    } catch (error) {
        yield put({
            type: types.DELETE_CUSTOMER_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* updateCustomerSaga({ payload }) {
    try {
        yield updateCustomersApi(payload.id, payload.customer);
        yield getCustomerSaga();
        yield put({
            type: types.UPDATE_CUSTOMER_SUCCESS
        })

    } catch (error) {
        yield put({
            type: types.UPDATE_CUSTOMER_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
const CustomerSaga = [
    takeEvery(types.GET_CUSTOMER_REQUEST, getCustomerSaga),
    takeEvery(types.POST_CUSTOMER_REQUEST, addCustomerSaga),
    takeEvery(types.DELETE_CUSTOMER_REQUEST, deleteCustomerSaga),
    takeEvery(types.UPDATE_CUSTOMER_REQUEST, updateCustomerSaga),

]

export default CustomerSaga