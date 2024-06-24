import axios from "axios";
import { toast } from "react-toastify";

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshJWT,
  showToast,
}) => {
  try {
    const pending = axios({
      method,
      url,
      data,
      isPrivate,
      isRefreshJWT,
    });

    let response = {};
    if (showToast) {
      toast.promise(pending, {
        pending: "Please wait...",
      });
      const response = await pending;
      toast[response.data.status](response.data.message);
    } else {
      response = await pending;
    }
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
