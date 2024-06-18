import { apiProcessor } from "../../services/axios";

const userEp = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/users";

export const postNewUser = (data) => {
  const obj = {
    url: userEp,
    method: "post",
    data,
    // isPrivate:true
  };
  return apiProcessor(obj);
};
export const verifyUserLink = (data) => {
  const obj = {
    url: userEp + "/user-verification",
    method: "post",
    data,
  };
  return apiProcessor(obj);
};
