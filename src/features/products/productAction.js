import { getAllProducts, postNewProduct } from "./productAxios";
import { setProducts } from "./productSlice";

export const createNewProductAction = (productData) => async (dispatch) => {
  const response = await postNewProduct(productData);

  if (response.status === "success") {
    dispatch(fetchProductAction());
    return true;
  }
};

export const fetchProductAction = () => async (dispatch) => {
  const { status, products } = await getAllProducts();

  if (status === "success") {
    dispatch(setProducts(products));
  }
};

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
