import { useUI } from "../../../../../../context/UI/UIContext"
import { Typography } from "../../../../Typography"

export const SearchTitles = () => {
  const {setShowWorkInProgress} = useUI()

  return (
    <div className="flex justify-center items-center gap-4">
      <Typography
        text="Pull requests"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD]"
        onClick={() => setShowWorkInProgress(true)}
      />
      <Typography
        text="Issues"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD]"
        onClick={() => setShowWorkInProgress(true)}
      />
      <Typography
        text="Codespaces"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD]"
        onClick={() => setShowWorkInProgress(true)}
      />
      <Typography
        text="Marketplace"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD]"
        onClick={() => setShowWorkInProgress(true)}
      />
      <Typography
        text="Explore"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD]"
        onClick={() => setShowWorkInProgress(true)}
      />
    </div>
  )
}
