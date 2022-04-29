import * as api from "../api";

export const getProducts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.error(error);
  }
};
