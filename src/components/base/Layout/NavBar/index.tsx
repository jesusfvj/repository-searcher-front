import { Logo } from "../../Logo"
import { ProfilePhoto } from "../../ProfilePhoto"
import { Icons } from "./NavBarComponents/Icons"
import { SearchBar } from "./NavBarComponents/SearchBar"
import { SearchTitles } from "./NavBarComponents/SearchTitles"
import { NavBarResponsive } from "./NavBarResponsive"

export const NavBar = () => {

    return (
        <>
            <nav className="hidden md:flex w-screen h-full bg-[#161B22] justify-between items-center px-8">
                <div className="flex justify-center items-center gap-4">
                    <Logo type="big" color="white" />
                    <SearchBar />
                    <SearchTitles />
                </div>
                <div className="flex justify-center items-center gap-3">
                    <Icons />
                    <ProfilePhoto size="sm" icon={true} />
                </div>
            </nav>
            {/**
             * Responsive NavBar
             */}
            <div className="md:hidden">
                <NavBarResponsive />
            </div>
        </>
    )
}