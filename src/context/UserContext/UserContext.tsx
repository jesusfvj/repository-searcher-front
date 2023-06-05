import { useEffect, createContext, useReducer } from "react";
import { useContext } from "react";
import { getAccessTokenAPI } from "../../API/user.api";
import { getUserDataAPI } from "../../API/user.api";
import { Props } from "../../interface/children";
import { types } from "../Types/types";
import { userReducer } from "./UserReducer";

export const UserContext = createContext<UserContextType>({ user: null } as UserContextType);

type UserContextType = {
  login: (codeParam: string) => Promise<{ ok: boolean; data: string; token: string; }>,
  logout: () => boolean,
  getUserDataContext: (accessToken?: string) => Promise<{ ok: boolean; data: string; }>,
  user:any;
};

export const useUser = (): UserContextType => {
  const state = useContext(UserContext);
  return state;
};

export const UserProvider = ({ children }: Props) => {

  const [userState, dispatch] = useReducer(userReducer, { user: null }, undefined);

  useEffect(() => {
  }, []);

  const login = async (codeParam: string) => {
    const response = await getAccessTokenAPI(codeParam)
    console.log(response)
    if (response.ok) {
      localStorage.setItem("token", response.data.token)
      dispatch({ type: types.login, payload: { userData: response.data.userData } });
    }
    return response
  };

  const getUserDataContext = async () => {
    const response = await getUserDataAPI()
    if (response.ok) {
      dispatch({ type: types.login, payload: { userData: response.userData.userData } });
    }
    return response
  }

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: types.logout });
    return true
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
