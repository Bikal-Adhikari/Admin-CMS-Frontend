import axios from "axios";
import { toast } from "react-toastify";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
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
          Authorization: getAccessJWT(),
        }
      : null;
    const pending = axios({
      method,
      url,
      data,
      isPrivate,
      isRefreshJWT,
      headers,
    });

    let response = {};
    if (showToast) {
      toast.promise(pending, {
        pending: "Please wait...",
      });
      const response = await pending;
      toast[response.data.status](response.data.message);
      console.log(response.data);
    } else {
      response = await pending;
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
