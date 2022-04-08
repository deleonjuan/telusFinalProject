import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import urlshortener from "./reducers/urlshortener";
import secret from "./reducers/secret";

const allReducers = combineReducers({
    urlshortener,
    secret
});

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
