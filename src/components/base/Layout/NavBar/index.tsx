import { Logo } from "../../Logo"
import { ProfilePhoto } from "../../ProfilePhoto"
import { Icons } from "./NavBarComponents/Icons"
import { SearchBar } from "./NavBarComponents/SearchBar"
import { SearchTitles } from "./NavBarComponents/SearchTitles"

export const NavBar = () => {
    return (
        <>
            <nav className="w-screen h-full bg-[#161B22] flex justify-between items-center px-8">
                <div className="flex justify-center items-center gap-4">
                    <Logo />
                    <SearchBar />
                    <SearchTitles />
                </div>
                <div className="flex justify-center items-center gap-3">
                    <Icons />
                    <ProfilePhoto size="sm" icon={true}/>
                </div>
            </nav>
        </>
    )
}