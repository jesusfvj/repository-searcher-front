import { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { useUI } from "../../../../../context/UI/UIContext"
import { sortTime } from "../../../../../utils/sort"
import { Typography } from "../../../../base/Typography"

export const TitleSortedRepositories = () => {
  const [isHovered, setIsHovered] = useState(false)
  const {
    selectedTypeFilter,
    sortedRepositories,
    selectedLanguageFilter,
    selectedSortFilter,
    setSelectedSortFilter,
    setSelectedLanguageFilter,
    setSelectedTypeFilter,
    repositories,
    isSearching,
    searchedRepositories,
    setSortedRepositories,
    setSearchInput,
    setIsSearching
  } = useUI()

  const clearFilter = () => {
    /**Set the default order to last updated */
    const copyArrayRepositories = [...repositories]
    const repositoriesSortByTime = sortTime(copyArrayRepositories)
    setSortedRepositories(repositoriesSortByTime)
    setSelectedSortFilter("Last updated")
    setSelectedLanguageFilter("All")
    setSelectedTypeFilter("All")
    setSearchInput("")
    setIsSearching(false)
  }

  return (
    <div className="w-full h-fit flex justify-between items-center border-b-[0.1rem] border-[#1f2328] py-6">
      <div className="flex gap-1 justify-start items-center">
        <Typography
          type="p4"
          color="blue"
          text={isSearching ? searchedRepositories.length : sortedRepositories.length} />
        <Typography
          type="p4"
          color="gray"
          text="results for" />
        <Typography
          type="p4"
          color="blue"
          text={selectedTypeFilter} />
        <Typography
          type="p4"
          color="gray"
          text="repositories" />
        {selectedLanguageFilter !== "All" &&
          <>
            <Typography
              type="p4"
              color="gray"
              text="written in" />
            <Typography
              type="p4"
              color="blue"
              text={selectedLanguageFilter} />
          </>
        }
        <Typography
          type="p4"
          color="gray"
          text="sorted by" />
        <Typography
          type="p4"
          color="blue"
          text={selectedSortFilter} />
      </div>
      <div className="flex justify-center items-center gap-2 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={clearFilter}
      >
        <Typography
          type="p2"
          color={`${isHovered ? 'blue' : 'gray'}`}
          text={<AiFillCloseCircle />} />
        <Typography
          type="p4"
          color={`${isHovered ? 'blue' : 'gray'}`}
          text="Clear filter" />
      </div>
    </div>
  )
}
