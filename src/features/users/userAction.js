import { toast } from "react-toastify";
import {
  fetchUserProfile,
  postNewUser,
  userLogin,
  verifyUserLink,
} from "./userAxios";
import { setUser } from "./userSlice";

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
  const { status, tokens } = await userLogin(data);
  if (status === "success") {
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.accessJWT);
    dispatch(fetchUserProfileAction());
  }
};

export const fetchUserProfileAction = () => async (dispatch) => {
  const { status, userInfo } = await fetchUserProfile();
  if (status === "success") {
    dispatch(setUser(userInfo));
  }
};
