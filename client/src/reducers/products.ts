import { createAction } from "@reduxjs/toolkit";
import { Action } from "redux";

const reducer = (products = [], action: any) => {
  switch (action.type) {
    case "FETCH_ ALL":
      console.log(action.payload);
      return action.payload;
    case "CREATE":
      return products;
    default:
      return products;
  }
};

export default reducer;
