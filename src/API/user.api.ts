import axios from "axios";
import { BASE_URL } from "../utils/FetchRoutes";
const BASE_URL_USER = BASE_URL + "/user"

export const getAccessTokenAPI = async (codeParam:string) => {
    try {
      const response = await axios.get(`${BASE_URL_USER}/getAccessToken?code=${codeParam}`);
      return response.data;
    } catch (error) {
      return error
  }
  };