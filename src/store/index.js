import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/Product.reducer";
import productDetailReducer from "./reducers/ProductDetail.reducer";

const rootReducer = combineReducers({
  productReducer,
  productDetailReducer
});

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);
