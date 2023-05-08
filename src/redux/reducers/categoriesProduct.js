import { UPLOAD_CATEGORY_DATA } from "../actions";

const initialState = {
  menCategory: [],
  womenCategory: [],
};

const categoriesProduct = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_CATEGORY_DATA:
      return {
        ...state,
        menCategory: action.payload.menCategory,
        womenCategory: action.payload.womenCategory,
      };
    default:
      return state;
  }
};

export default categoriesProduct;
