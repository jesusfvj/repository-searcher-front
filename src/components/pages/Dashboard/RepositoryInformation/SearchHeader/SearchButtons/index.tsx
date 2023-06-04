import { useUI } from "../../../../../../context/UI/UIContext"
import { ButtonComponent } from "../../../../../base/ButtonComponent"
import { Typography } from "../../../../../base/Typography"
import { LuBookPlus } from "react-icons/lu"
import { VscTriangleDown } from "react-icons/vsc"
import { useState } from "react"
import { TypeDropdown } from "./TypeDropdown"
import { LanguageDropdown } from "./LanguageDropdown"

export const SearchButtons = () => {
    const [activeDropdown, setActiveDropdown] = useState<string>("none")
    const { setShowWorkInProgress } = useUI()
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
                <div className="relative">
                    <ButtonComponent
                        text="Type"
                        size="sm"
                        color="gray"
                        dropDown={<Typography
                            text={<VscTriangleDown />}
                            type="p5"
                            color="white"
                        />}
                        styles={`${activeDropdown === "type" && 'border-[#8B949E]'}`}
                        onClick={() => setActiveDropdown("type")} />
                    {activeDropdown === "type" &&
                        <TypeDropdown setActiveDropdown={setActiveDropdown} />
                    }
                </div>
                <div className="relative">
                    <ButtonComponent
                        text="Language"
                        size="sm"
                        color="gray"
                        dropDown={<Typography
                            text={<VscTriangleDown />}
                            type="p5"
                            color="white"
                        />}
                        styles={`${activeDropdown === "language" && 'border-[#8B949E]'}`}
                        onClick={() => setActiveDropdown("language")} />
                    {activeDropdown === "language" &&
                        <LanguageDropdown setActiveDropdown={setActiveDropdown} />
                    }
                </div>
                <div className="relative">
                    <ButtonComponent
                        text="Sort"
                        size="sm"
                        color="gray"
                        dropDown={<Typography
                            text={<VscTriangleDown />}
                            type="p5"
                            color="white"
                        />}
                        styles={`${activeDropdown === "sort" && 'border-[#8B949E]'}`}
                        onClick={() => setActiveDropdown("sort")} />
                    {activeDropdown === "sort" &&
                        <TypeDropdown setActiveDropdown={setActiveDropdown} />
                    }
                </div>
            </div>
            <ButtonComponent
                text="New"
                size="sm"
                color="new"
                icon={<Typography
                    text={<LuBookPlus />}
                    color="white"
                />}
                styles="hidden md:flex"
                onClick={() => setShowWorkInProgress(true)} />
        </div>
    )
}