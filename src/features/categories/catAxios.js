import { apiProcessor } from "../../services/axios";

const categoryEP = import.meta.env.VITE_APP_SERVR_ROOT + "/api/v1/categories";

export const postNewCategory = (data) => {
  const obj = {
    url: categoryEP,
    method: "post",
    data,
    isPrivate: true,
    showToast: true,
  };

  return apiProcessor(obj);
};
export const getAllCategories = () => {
  const obj = {
    url: categoryEP,
    method: "get",
    isPrivate: true,
  };

  return apiProcessor(obj);
};
