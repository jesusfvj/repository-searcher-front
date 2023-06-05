import { useState } from "react"
import { Logo } from "../../Logo"
import { ProfilePhoto } from "../../ProfilePhoto"
import { Icons } from "./NavBarComponents/Icons"
import { SearchBar } from "./NavBarComponents/SearchBar"
import { SearchTitles } from "./NavBarComponents/SearchTitles"
import { NavBarResponsive } from "./NavBarResponsive"
import { ProfileDropdown } from "./ProfileDropdown"

export const NavBar = () => {
    const [showLogOut, setShowLogOut] = useState<boolean>(false)

    const handleBackToDashboard = () => {
        window.location.href = import.meta.env.VITE_BASE_UR + "/dashboard";
    }
    return (
        <>
            <nav className="relative hidden md:flex w-screen h-full bg-[#161B22] justify-between items-center px-8">
                <div className="flex justify-center items-center gap-4">
                    <Logo type="big" color="white" onClick={handleBackToDashboard} />
                    <SearchBar />
                    <SearchTitles />
                </div>
                <div className="flex justify-center items-center gap-3"
                    onClick={() => setShowLogOut(true)}>
                    <Icons />
                    <ProfilePhoto size="sm" icon={true} />
                </div>
                {showLogOut &&
                    <ProfileDropdown setShowLogOut={setShowLogOut} />
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