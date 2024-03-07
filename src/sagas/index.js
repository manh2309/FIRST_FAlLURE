import { all } from "redux-saga/effects"
import CustomerSaga from "./CustomerSaga";
function* rootSaga() {
    yield all([
        ...CustomerSaga
    ]);
}
export default rootSaga