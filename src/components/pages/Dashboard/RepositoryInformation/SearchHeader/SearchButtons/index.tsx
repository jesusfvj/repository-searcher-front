import { useUI } from "../../../../../../context/UI/UIContext"
import { ButtonComponent } from "../../../../../base/ButtonComponent"
import { Typography } from "../../../../../base/Typography"
import { LuBookPlus } from "react-icons/lu"
import { VscTriangleDown } from "react-icons/vsc"
import { useState } from "react"
import { TypeDropdown } from "./TypeDropdown"
import { LanguageDropdown } from "./LanguageDropdown"
import { SortDropdown } from "./SortDropdown"
import { SortDropdownResponsive } from "./SortDropdownResponsive"
import { TypeDropdownResponsive } from "./TypeDropdownResponsive"
import { LanguageDropdownResponsive } from "./LanguageDropdownResponsive"

export const SearchButtons = () => {
    const [activeDropdown, setActiveDropdown] = useState<string>("none")
    const { setShowWorkInProgress } = useUI()
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 flex-wrap md:flex-nowrap justify-center">
                    <div className="relative">
                        <ButtonComponent
                            text="Type"
                            size="sm"
                            color="gray"
                            dropDown={<Typography
                                text={<VscTriangleDown />}
                                type="p5"
                                color="white"
                                styles="hidden md:flex"
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
                                styles="hidden md:flex"
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
                                styles="hidden md:flex"
                            />}
                            styles={`${activeDropdown === "sort" && 'border-[#8B949E]'}`}
                            onClick={() => setActiveDropdown("sort")} />
                        {activeDropdown === "sort" &&
                            <SortDropdown setActiveDropdown={setActiveDropdown} />
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
            <div className="md:hidden w-full">
                {activeDropdown === "type" &&
                    <TypeDropdownResponsive setActiveDropdown={setActiveDropdown}/>
                }
                {activeDropdown === "language" &&
                    <LanguageDropdownResponsive setActiveDropdown={setActiveDropdown} />
                }
                {activeDropdown === "sort" &&
                    <SortDropdownResponsive setActiveDropdown={setActiveDropdown} />
                }
            </div>
        </div>
    )
}