import { toast } from "react-toastify";
import { postNewUser } from "./userAxios";

export const apiProcessWithToast = async (obj, func) => {
  const pending = func(obj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const response = await pending;
  toast[response.status](response.message);
  return response;
};

export const createNewAdminAction = async (userData) =>
  apiProcessWithToast(userData, postNewUser);
