import { createContext, useContext, useState } from "react";
import { Props } from "../../interface/children";

export const UIContext = createContext<UIContextType>({} as UIContextType);

type UIContextType = {
  setMessageSuccessToaster: (message: string) => void;
  setMessageErrorToaster: (message: string) => void;
  setLoadingMessage: (loading: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  messageSuccessToaster: string;
  messageErrorToaster: string;
  loadingMessage: boolean;
  isLoading: boolean;
};

export const useUI = (): UIContextType => {
  const state = useContext(UIContext);
  return state;
};

export const UIProvider = ({ children }:Props) => {
  const [messageSuccessToaster, setMessageSuccessToaster] = useState<string>("");
  const [messageErrorToaster, setMessageErrorToaster] = useState<string>("");
  const [loadingMessage, setLoadingMessage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <UIContext.Provider
      value={{
        setMessageSuccessToaster,
        setMessageErrorToaster,
        setLoadingMessage,
        setIsLoading,
        messageSuccessToaster,
        messageErrorToaster,
        loadingMessage,
        isLoading,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;
