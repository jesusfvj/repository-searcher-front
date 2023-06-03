import { createContext, useContext, useState } from "react";
import { Props } from "../../interface/children";

export const UIContext = createContext<UIContextType>({} as UIContextType);

type UIContextType = {
  setMessageSuccessToaster: (message: string) => void;
  setMessageErrorToaster: (message: string) => void;
  setLoadingMessage: (loading: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setShowWorkInProgress: (showWorkInProgress: boolean) => void;
  setIsExpired: (isExpired: boolean) => void;
  isExpired: boolean,
  showWorkInProgress: boolean;
  messageSuccessToaster: string;
  messageErrorToaster: string;
  loadingMessage: boolean;
  isLoading: boolean;
};

export const useUI = (): UIContextType => {
  const state = useContext(UIContext);
  return state;
};

export const UIProvider = ({ children }: Props) => {
  const [messageSuccessToaster, setMessageSuccessToaster] = useState<string>("");
  const [messageErrorToaster, setMessageErrorToaster] = useState<string>("");
  const [loadingMessage, setLoadingMessage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [showWorkInProgress, setShowWorkInProgress] = useState<boolean>(false);

  return (
    <UIContext.Provider
      value={{
        setMessageSuccessToaster,
        setMessageErrorToaster,
        setShowWorkInProgress,
        setLoadingMessage,
        setIsLoading,
        messageSuccessToaster,
        messageErrorToaster,
        showWorkInProgress,
        loadingMessage,
        isLoading,
        isExpired,
        setIsExpired,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;