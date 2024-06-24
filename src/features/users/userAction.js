import { toast } from "react-toastify";
import { postNewUser, userLogin, verifyUserLink } from "./userAxios";

export const apiProcessWithToast = async (obj, func) => {
  const pending = func(obj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const response = await pending;
  toast[response.status](response.message);
  return response;
};

export const createNewAdminAction = async (userData) => {
  apiProcessWithToast(userData, postNewUser);
};

export const verifyUserLinkAction = async (data) => {
  return apiProcessWithToast(data, verifyUserLink);
};
export const loginAdminAction = (data) => async (dispatch) => {
  const response = await userLogin(data);
  console.log(response);
};
