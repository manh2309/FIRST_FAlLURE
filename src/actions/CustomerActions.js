import * as types from "../constant"
export function getCustomerAction() {
    return {
        type: types.GET_CUSTOMER_REQUEST
    }
}
export function addCustomerAction(customer) {
    return {
        type: types.POST_CUSTOMER_REQUEST,
        payload: customer
    }
}

export function deleteCustomerAction(id) {
    return {
        type: types.DELETE_CUSTOMER_REQUEST,
        payload: id
    }
}
export function updateCustomerAction(id, customer) {
    return {
        type: types.UPDATE_CUSTOMER_REQUEST,
        payload: { id, customer }
    }
}