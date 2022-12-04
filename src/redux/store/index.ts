import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { reducers } from "../reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "../saga";

const sagaMiddleware = createSagaMiddleware();
export const store: Store<any, any> = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
