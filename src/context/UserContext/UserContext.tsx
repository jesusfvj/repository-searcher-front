import { useEffect, createContext, useReducer } from "react";
import { useContext } from "react";
import { getAccessTokenAPI } from "../../API/user.api";
import { Props } from "../../interface/children";
import { retrieveAccessToken } from "../../utils/stringManipulation";
import { types } from "../Types/types";
import { userReducer } from "./UserReducer";

export const UserContext = createContext<UserContextType>({} as UserContextType);

type UserContextType = {
  login: (codeParam: string) => Promise<{ ok: boolean; data: string; token: string; }>,
  logout: () => void,
};

export const useUser = (): UserContextType => {
  const state = useContext(UserContext);
  return state;
};

export const UserProvider = ({ children }: Props) => {

  const init = async () => {
  };

  const [userState, dispatch] = useReducer(userReducer, {}, init);

  useEffect(() => {
  }, []);

  const login = async (codeParam:string) => {
    const response = await getAccessTokenAPI(codeParam)
    if (response.ok) {
      const accessToken = retrieveAccessToken(response.data)
      localStorage.setItem("token", response.token)
      dispatch({ type: types.login, payload: accessToken });
    }
    return response
};

const logout = () => {
  localStorage.removeItem("accessToken");
  dispatch({ type: types.logout });
};

return (
  <UserContext.Provider
    value={{
      ...userState,
      login,
      logout
    }}
  >
    {children}
  </UserContext.Provider>
);
};

export default UserProvider;
