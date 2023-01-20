import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import registerReducer from "./user-reducers";

const rootReducre = combineReducers({ registerReducer });
export const Store = createStore(rootReducre, applyMiddleware(thunk));

