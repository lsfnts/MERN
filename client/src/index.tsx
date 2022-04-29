import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./reducers/products";

import App from "./App";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
