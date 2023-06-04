import { useEffect, createContext, useReducer } from "react";
import { useContext } from "react";
import { getAccessTokenAPI } from "../../API/user.api";
import { getUserDataAPI } from "../../API/graphql.api";
import { Props } from "../../interface/children";
import { retrieveAccessToken } from "../../utils/stringManipulation";
import { types } from "../Types/types";
import { userReducer } from "./UserReducer";

export const UserContext = createContext<UserContextType>({ user: null } as UserContextType);

type UserContextType = {
  login: (codeParam: string) => Promise<{ ok: boolean; data: string; token: string; }>,
  logout: () => void,
  getUserDataContext: (accessToken?: string) => Promise<{ ok: boolean; data: string; }>,
  user:any;
  /* user: UserResponse | null; */
};

export const useUser = (): UserContextType => {
  const state = useContext(UserContext);
  return state;
};

export const UserProvider = ({ children }: Props) => {

  /* const init = async () => {
  };
 */
  const [userState, dispatch] = useReducer(userReducer, { user: null }, undefined);

  useEffect(() => {
  }, []);

  const login = async (codeParam: string) => {
    const response = await getAccessTokenAPI(codeParam)
    if (response.ok) {
      const accessToken = retrieveAccessToken(response.data)
      localStorage.setItem("token", response.token)
      dispatch({ type: types.login, payload: { accessToken } });
    }
    return response
  };

  const getUserDataContext = async (accessToken: string | undefined = "") => {
    const response = await getUserDataAPI(accessToken)
    console.log(response)
    if (response.ok) {
      dispatch({ type: types.login, payload: { userData: response.data } });
    }
    return response
  }

  const logout = () => {
    localStorage.removeItem("accessToken");
    dispatch({ type: types.logout });
  };

  return (
    <UserContext.Provider
      value={{
        ...userState,
        login,
        logout,
        getUserDataContext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
