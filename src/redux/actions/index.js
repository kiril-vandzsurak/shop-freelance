export const UPLOAD_CATEGORY_DATA = "UPLOAD_CATEGORY_DATA";

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
