import { apiProcessor } from "../../services/axios";

const productEP = import.meta.env.VITE_APP_SERVR_ROOT + "/api/v1/products";

export const postNewProduct = (data) => {
  const obj = {
    url: productEP,
    method: "post",
    data,
    isPrivate: true,
    showToast: true,
  };
  console.log(data);
  return apiProcessor(obj);
};
export const getAllProducts = () => {
  const obj = {
    url: productEP,
    method: "get",
    isPrivate: true,
  };

  return apiProcessor(obj);
};
// export const editCategory = (form) => {
//   const obj = {
//     url: `${categoryEP}/${form._id}`,
//     method: "put",
//     isPrivate: true,
//     showToast: true,
//     data: form,
//   };

//   return apiProcessor(obj);
// };
// export const deleteCategory = (_id) => {
//   const obj = {
//     url: `${categoryEP}/${_id}`,
//     method: "delete",
//     isPrivate: true,
//     showToast: true,
//   };

//   return apiProcessor(obj);
// };
