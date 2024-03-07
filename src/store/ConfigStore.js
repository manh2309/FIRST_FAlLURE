import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index"
import createSagaMiddleware from "redux-saga"
import rootSaga from "../sagas/index";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, logger),
})
sagaMiddleware.run(rootSaga)

export default store;