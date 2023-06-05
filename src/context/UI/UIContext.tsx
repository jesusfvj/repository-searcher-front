import { createContext, useContext, useState } from "react";
import { Props } from "../../interface/children";
import { FollowerFollowing } from "../../interface/followerFollowing";
import { Repository } from "../../interface/repository";

export const UIContext = createContext<UIContextType>({} as UIContextType);

type UIContextType = {
  setMessageSuccessToaster: (message: string) => void;
  setMessageErrorToaster: (message: string) => void;
  setLoadingMessage: (loading: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setShowWorkInProgress: (showWorkInProgress: boolean) => void;
  setIsExpired: (isExpired: boolean) => void;
  setRepositories: (repositories: Repository[]) => void;
  setSortedRepositories: (repositories: Repository[]) => void;
  setSelectedTypeFilter: (selectedTypeFilter: string) => void;
  setSelectedLanguageFilter: (selectedLanguageFilter: string) => void;
  setSelectedSortFilter: (selectedSortFilter: string) => void;
  setSearchedRepositories: (searchedRepositories: Repository[]) => void;
  setIsSearching: (isSearching: boolean) => void;
  setSearchInput: (searchInput: string) => void;
  setFriendsArray: (friendsArray: FollowerFollowing[]) => void;
  setArrayLanguages: (arrayTitles: string[]) => void;
  arrayLanguages: string[];
  foundUser: any;
  setFoundUser: any;
  friendsArray: FollowerFollowing[];
  searchInput: string;
  searchedRepositories: Repository[];
  isSearching: boolean;
  selectedSortFilter: string;
  selectedLanguageFilter: string;
  selectedTypeFilter: string;
  sortedRepositories: Repository[];
  repositories: Repository[];
  isExpired: boolean
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
  const [arrayLanguages, setArrayLanguages] = useState<string[]>([]);
  const [friendsArray, setFriendsArray] = useState<FollowerFollowing[]>([])
  const [selectedSortFilter, setSelectedSortFilter] = useState<string>("Last updated");
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState<string>("All");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>("All");
  const [repositories, setRepositories] = useState<Array<Repository>>([]);
  const [sortedRepositories, setSortedRepositories] = useState<Array<Repository>>([]);
  const [searchedRepositories, setSearchedRepositories] = useState<Array<Repository>>([]);
  const [messageSuccessToaster, setMessageSuccessToaster] = useState<string>("");
  const [messageErrorToaster, setMessageErrorToaster] = useState<string>("");
  const [loadingMessage, setLoadingMessage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showWorkInProgress, setShowWorkInProgress] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [foundUser, setFoundUser] = useState({});




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
        repositories,
        setRepositories,
        selectedTypeFilter,
        setSelectedTypeFilter,
        sortedRepositories,
        setSortedRepositories,
        selectedLanguageFilter,
        setSelectedLanguageFilter,
        selectedSortFilter,
        setSelectedSortFilter,
        searchedRepositories,
        setSearchedRepositories,
        isSearching,
        setIsSearching,
        searchInput,
        setSearchInput,
        friendsArray,
        setFriendsArray,
        foundUser,
        setFoundUser,
        arrayLanguages,
        setArrayLanguages
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;