import * as config from "react-global-configuration";
import {Api} from "../../../api/Api";

export const getMyCourses = async () => {
  try {
    const resp = await Api.get(`${config.get('apiUrl')}/course`);
    let data = resp.data;
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
