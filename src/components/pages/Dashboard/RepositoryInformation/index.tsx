import { useEffect } from "react";
import { useUI } from "../../../../context/UI/UIContext";
import { useUser } from "../../../../context/UserContext/UserContext";
import { Repository } from "../../../../interface/repository";
import { TitleSortedRepositories } from "./TitleSortedRepositories";
import { RepositoryComponents } from "./RepositoryComponents"
import { SearchHeader } from "./SearchHeader"
import { sortTime } from "../../../../utils/sort";

export const RepositoryInformation = () => {
  const { sortedRepositories,
    setRepositories,
    setSortedRepositories,
    selectedTypeFilter,
    selectedLanguageFilter,
    isSearching,
    searchedRepositories
  } = useUI()
  const { user } = useUser()

  useEffect(() => {
    if (user?.userData?.repositories?.nodes) {
      const arrayRepositories = user?.userData?.repositories?.nodes
      /**Set the default order of the repositories to last updated */
      setRepositories(sortTime([...arrayRepositories]))
      setSortedRepositories(sortTime([...arrayRepositories]))
    }
  }, [user])

  return (
    <div className="flex flex-col w-full md:pl-4">
      <SearchHeader />
      {selectedTypeFilter === "All" && selectedLanguageFilter === "All"
        ? null
        : <TitleSortedRepositories />
      }
      {!isSearching ?
        <>
          {sortedRepositories && sortedRepositories.length > 0 &&
            <div>
              {sortedRepositories.map((repository: Repository, index: number) => {
                return (
                  <RepositoryComponents key={index} repository={repository} />
                )
              })}
            </div>
          }
        </>
        : <>
          {searchedRepositories && searchedRepositories.length > 0 &&
            <div>
              {searchedRepositories.map((repository: Repository, index: number) => {
                return (
                  <RepositoryComponents key={index} repository={repository} />
                )
              })}
            </div>
          }
        </>
      }
    </div>
  )
}
