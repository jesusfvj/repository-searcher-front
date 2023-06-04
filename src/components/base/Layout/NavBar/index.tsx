import { useState } from "react"
import { useUI } from "../../../../context/UI/UIContext"
import { Logo } from "../../Logo"
import { ProfilePhoto } from "../../ProfilePhoto"
import { Icons } from "./NavBarComponents/Icons"
import { SearchBar } from "./NavBarComponents/SearchBar"
import { SearchTitles } from "./NavBarComponents/SearchTitles"
import { NavBarResponsive } from "./NavBarResponsive"
import { ProfileDropdown } from "./ProfileDropdown"

export const NavBar = () => {
    const { setShowWorkInProgress } = useUI()
    const [showLogOut, setShowLogOut] = useState<boolean>(false)

    return (
        <>
            <nav className="relative hidden md:flex w-screen h-full bg-[#161B22] justify-between items-center px-8">
                <div className="flex justify-center items-center gap-4">
                    <Logo type="big" color="white" onClick={()=> setShowWorkInProgress(true)}/>
                    <SearchBar />
                    <SearchTitles />
                </div>
                <div className="flex justify-center items-center gap-3"
                onClick={()=>setShowLogOut(true)}>
                    <Icons />
                    <ProfilePhoto size="sm" icon={true} />
                </div>
                {showLogOut &&
                <ProfileDropdown setShowLogOut={setShowLogOut}/>
                }
            </nav>
            {/**
             * Responsive NavBar:
             */}
            <div className="md:hidden">
                <NavBarResponsive />
            </div>
        </>
    )
}