import { setShowModal } from "../../store/systemSlice";
import { getAllCategories, postNewCategory } from "./catAxios";
import { setCategories } from "./catSlice";

export const createNewCategoryAction = (catData) => async (dispatch) => {
  const response = await postNewCategory(catData);

  if (response.status === "success") {
    dispatch(setShowModal(false));
  }
};

export const fetchCategoryAction = () => async (dispatch) => {
  const { status, categories } = await getAllCategories();

  if (status === "success") {
    dispatch(setCategories(categories));
  }
};
