import axios from "axios";
const BASE_URL_USER = import.meta.env.VITE_BASE_URL + "/user"

export const getAccessTokenAPI = async (codeParam: string) => {
  try {
    const response = await axios.get(`${BASE_URL_USER}/getAccessToken?code=${codeParam}`);
    return response.data;
  } catch (error) {
    return error
  }
};

export const getUserDataAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL_USER}/getUserData`, {
      headers: {
        "x-token": window.localStorage.getItem("token"),
      }
    });
    console.log(response)
    return response.data;
  } catch (error: any) {
    if (error?.response?.data) {
      return error.response.data
    }
    return error
  }
};