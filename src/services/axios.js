import axios from "axios";

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshJWT,
}) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      isPrivate,
      isRefreshJWT,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
