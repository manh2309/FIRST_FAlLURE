import * as types from "../constant"

const DEFAULT_STATE = {
    listCustomer: [],
    dataFetching: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.GET_CUSTOMER_SUCCESS:
            return {
                ...state,
                dataFetching: true,
                isFetching: false,
                error: false,
                errorMessage: null,
                listCustomer: action.payload
            }
        case types.GET_CUSTOMER_FAILURE:
            return {
                ...state,
                dataFetching: false,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case types.POST_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.POST_CUSTOMER_SUCCESS:
            return {
                ...state,
                dataFetching: true,
                isFetching: false,
                error: false,
                errorMessage: null
            }
        case types.POST_CUSTOMER_FAILURE:
            return {
                ...state,
                dataFetching: false,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case types.DELETE_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.DELETE_CUSTOMER_SUCCESS:
            return {
                ...state,
                dataFetching: true,
                isFetching: false,
                error: false,
                errorMessage: null
            }
        case types.DELETE_CUSTOMER_FAILURE:
            return {
                ...state,
                dataFetching: false,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case types.UPDATE_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.UPDATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                dataFetching: true,
                isFetching: false,
                error: false,
                errorMessage: null
            }
        case types.UPDATE_CUSTOMER_FAILURE:
            return {
                ...state,
                dataFetching: false,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state
    }
}