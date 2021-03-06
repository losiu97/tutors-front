import {Api} from "../../api/Api";
import * as config from "react-global-configuration";
import {getCurrentUser} from "../login/getCurrentUser";


export const addUserDetails = async (userId, details) => {
  try {
    const resp = await Api.post(`${config.get('apiUrl')}/user/${userId}/details`, details);

    getCurrentUser();

    return resp;
  } catch (e) {
    console.log(e.response.data);
    throw e.response.data;
  }
};
