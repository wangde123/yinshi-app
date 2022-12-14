import { legacy_createStore as createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import reducer from "./rootReducer";
import mySaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;
