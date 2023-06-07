import { commonrequest } from "./ApiCalls";
import { BASE_URL } from "./Helper";

export const registerFunc = async (data, header) => {
  return await commonrequest("POST", `${BASE_URL}/api/v1/users/create-user`, data, header);
};

// export const loginUser = async (data, header) => {
//   return await commonrequest("POST", `${BASE_URL}/api/user`, data, header);
// };