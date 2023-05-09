export const UPLOAD_CATEGORY_DATA = "UPLOAD_CATEGORY_DATA";
export const ADD_TO_CART = "ADD_TO_CART";
export const RESET_CART = "RESET_CART";

export const uploadCategoryData = (menCategory, womenCategory) => {
  return async (dispatch) => {
    dispatch({
      type: UPLOAD_CATEGORY_DATA,
      payload: {
        menCategory: menCategory,
        womenCategory: womenCategory,
      },
    });
  };
};

export const addToCart = (product) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: product,
      },
    });
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
