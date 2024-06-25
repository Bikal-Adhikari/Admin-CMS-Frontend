import axios from "axios";
import { toast } from "react-toastify";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshJWT,
  showToast,
}) => {
  try {
    const headers = isPrivate
      ? {
          Authorization: isRefreshJWT ? getRefreshJWT() : getAccessJWT(),
        }
      : null;
    const pending = axios({
      method,
      url,
      data,
      headers,
    });

    let response = {};
    if (showToast) {
      toast.promise(pending, {
        pending: "Please wait...",
      });

      response = await pending;
      console.log(response);
      toast[response.data.status](response.data.message);
    } else {
      response = await pending;
    }

    return response.data;
  } catch (error) {
    showToast && toast.error(error.message);
    return {
      status: "error",
      message: error.message,
    };
  }
};
