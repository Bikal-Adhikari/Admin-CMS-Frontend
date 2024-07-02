import { postNewProduct } from "./productAxios";

export const createNewProductAction = (productData) => async (dispatch) => {
  const response = await postNewProduct(productData);

  // if (response.status === "success") {
  //   dispatch(fetchCategoryAction());
  //   return true;
  // }
};

// export const fetchCategoryAction = () => async (dispatch) => {
//   const { status, categories } = await getAllCategories();

//   if (status === "success") {
//     dispatch(setCategories(categories));
//   }
// };

// export const EditCategoryAction = (form) => async (dispatch) => {
//   const { status } = await editCategory(form);
//   if (status === "success") {
//     dispatch(fetchCategoryAction());
//     return true;
//   }
// };
// export const deleteCategoryAction = (_id) => async (dispatch) => {
//   const { status } = await deleteCategory(_id);
//   if (status === "success") {
//     dispatch(fetchCategoryAction());
//   }
// };
