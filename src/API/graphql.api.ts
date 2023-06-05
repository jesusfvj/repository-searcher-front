import axios from "axios";

const BASE_URL_GRAPH = import.meta.env.VITE_BASE_URL + "/graphql"

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