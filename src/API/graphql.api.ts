import axios from "axios";
import { BASE_URL } from "../utils/FetchRoutes";
const BASE_URL_GRAPH = BASE_URL + "/graphql"

export const getUserDataAPI = async (accessToken: string) => {
  try {
    const response = await axios.get(`${BASE_URL_GRAPH}/getUserData`, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "x-token": window.localStorage.getItem("token"),
      }
    });
    return response.data;
  } catch (error: any) {
    if (error?.response?.data) {
      return error.response.data
    }
    return error
  }
};