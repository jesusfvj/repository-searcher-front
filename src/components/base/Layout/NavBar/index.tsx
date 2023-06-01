import { Logo } from "../../Logo"
import { SearchBar } from "./NavBarComponent/SearchBar"
import { SearchTitles } from "./NavBarComponent/SearchTitles"


export const NavBar = () => {
    return (
        <nav className="w-screen h-full bg-[#161B22] flex justify-around items-center cursor-pointer">
                <Logo />
                <SearchBar />
                <SearchTitles />
        </nav>
    )
}
