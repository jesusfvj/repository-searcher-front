import { useUI } from "../../../../../context/UI/UIContext"
import { Typography } from "../../../../base/Typography"

export const TitleSortedRepositories = () => {
  const { selectedTypeFilter, sortedRepositories } = useUI()

  return (
    <div className="w-full h-fit flex justify-start items-center border-b-[0.1rem] border-[#1f2328] py-6">
      <div className="flex gap-1 justify-start items-center">
        <Typography
          type="p4"
          color="blue"
          text={sortedRepositories.length} />
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
      </div>
    </div>
  )
}
