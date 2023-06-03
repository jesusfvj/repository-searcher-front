import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { BiBell } from "react-icons/bi"
import { useUI } from "../../../../../context/UI/UIContext"
import { Logo } from "../../../Logo"
import { Typography } from "../../../Typography"
import { SearchBar } from "../NavBarComponents/SearchBar"
import { SearchTitles } from "../NavBarComponents/SearchTitles"

export const NavBarResponsive = () => {
    const { setShowWorkInProgress } = useUI()
    const [showSearchBar, setShowSearchBar] = useState<boolean>(false)

    return (
        <nav className="w-screen h-full bg-[#161B22] flex flex-col justify-between items-center px-4 py-4">
            <div className="flex justify-between items-center gap-4 w-full">
                <Typography
                    text={<AiOutlineMenu />}
                    type="big"
                    color="white"
                    styles="cursor-pointer"
                    onClick={() => setShowSearchBar(!showSearchBar)}
                />
                <Logo
                    type="veryImportant"
                    color="white"
                    onClick={() => setShowWorkInProgress(true)} />
                <Typography
                    text={<BiBell />}
                    type="big"
                    color="white"
                    styles="cursor-pointer hover:text-[#BABBBD]"
                    onClick={() => setShowWorkInProgress(true)}
                />
            </div>
            {
                showSearchBar &&
                <div className="pt-4 w-full">
                    <SearchBar />
                    <SearchTitles />
                </div>
            }
        </nav>
    )
}
