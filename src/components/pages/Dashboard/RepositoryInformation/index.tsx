import { useEffect } from "react";
import { useUI } from "../../../../context/UI/UIContext";
import { useUser } from "../../../../context/UserContext/UserContext";
import { Repository } from "../../../../interface/repository";
import { TitleSortedRepositories } from "./TitleSortedRepositories";
import { RepositoryComponents } from "./RepositoryComponents"
import { SearchHeader } from "./SearchHeader"

export const RepositoryInformation = () => {
  const { sortedRepositories, setRepositories, setSortedRepositories, selectedTypeFilter } = useUI()
  const { user } = useUser()

  useEffect(() => {
    if (user?.userData?.repositories?.nodes) {
      const arrayRepositories = user?.userData?.repositories?.nodes
      const a = [...arrayRepositories]
      setRepositories(a)
      setSortedRepositories(a)
    }
  }, [user])

  return (
    <div className="flex flex-col w-full md:pl-4">
      <SearchHeader />
      {selectedTypeFilter !== "All" &&
        <TitleSortedRepositories />
      }
      {sortedRepositories && sortedRepositories.length > 0 &&
        <div>
          {sortedRepositories.map((repository: Repository, index: number) => {
            return (
              <RepositoryComponents key={index} repository={repository} />
            )
          })}
        </div>
      }
    </div>
  )
}
