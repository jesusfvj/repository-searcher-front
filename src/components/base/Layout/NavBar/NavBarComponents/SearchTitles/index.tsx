import { useUI } from "../../../../../../context/UI/UIContext"
import { Typography } from "../../../../Typography"
import { ProfilePhoto } from "../../../../ProfilePhoto"
import { GoSignOut } from "react-icons/go"
import { useState } from "react"

export const SearchTitles = () => {
  const { setShowWorkInProgress } = useUI()
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const userNickName = "jesusfvj"

  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-2 md:gap-4 py-3 md:py-0">
      <Typography
        text="Dashboard"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD] md:hidden border-t border-[#33363b] md:border-0 w-full pt-2 md:pt-0"
        onClick={() => setShowWorkInProgress(true)}
      />
      <Typography
        text="Pull requests"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD] border-t border-[#33363b] md:border-0 w-full pt-2 md:pt-0"
        onClick={() => setShowWorkInProgress(true)}
      />
      <Typography
        text="Issues"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD] border-t border-[#33363b] md:border-0 w-full pt-2 md:pt-0"
        onClick={() => setShowWorkInProgress(true)}
      />
      <Typography
        text="Codespaces"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD] border-t border-[#33363b] md:border-0 w-full pt-2 md:pt-0"
        onClick={() => setShowWorkInProgress(true)}
      />
      <Typography
        text="Marketplace"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD] border-t border-[#33363b] md:border-0 w-full pt-2 md:pt-0"
        onClick={() => setShowWorkInProgress(true)}
      />
      <Typography
        text="Explore"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD] border-t border-[#33363b] md:border-0 w-full pt-2 md:pt-0"
        onClick={() => setShowWorkInProgress(true)}
      />
      <Typography
        text="Sponsors"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD] md:hidden border-t border-[#33363b] md:border-0 w-full pt-2 md:pt-0"
        onClick={() => setShowWorkInProgress(true)}
      />
      <Typography
        text="Settings"
        type="p3"
        color="white"
        styles="cursor-pointer hover:text-[#BABBBD] md:hidden border-t border-[#33363b] md:border-0 w-full pt-2 md:pt-0"
        onClick={() => setShowWorkInProgress(true)}
      />
      <div className="flex gap-2 md:hidden items-center border-t border-[#33363b] md:border-0 w-full pt-2 md:pt-0">
        <ProfilePhoto size="md" />
        <Typography
          text={userNickName}
          type="p3"
          color="white"
          styles="cursor-pointer hover:text-[#BABBBD] md:hidden"
          onClick={() => setShowWorkInProgress(true)}
        />
      </div>
      <div className="flex gap-2 md:hidden items-center border-t border-[#33363b] md:border-0 w-full pt-2 md:pt-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowWorkInProgress(true)}>
        <Typography
          text={<GoSignOut />}
          type="p3"
          color={`${isHovered ? 'gray' : 'white'}`}
          styles="cursor-pointer md:hidden"
        />
        <Typography
          text="Sign out"
          type="p3"
          color={`${isHovered ? 'gray' : 'white'}`}
          styles="cursor-pointer md:hidden"
        />
      </div>
    </div>
  )
}
