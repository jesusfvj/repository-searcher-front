import { useEffect } from "react"
import { RxCross1 } from "react-icons/rx"
import { TiTick } from "react-icons/ti"
import { useUI } from "../../../../../../../context/UI/UIContext";
import { Typography } from "../../../../../../base/Typography"

interface TypeDropdownProps {
    setActiveDropdown: (value: string) => void;
}

export const TypeDropdown: React.FC<TypeDropdownProps> = ({ setActiveDropdown }) => {
    const { repositories, setSortedRepositories, selectedTypeFilter, setSelectedTypeFilter} = useUI()
    const arrayTitles = ["Select type", "All", "Public", "Private", "Sources", "Forks", "Archive", "Can be sponsored", "Mirrors", "Templates"]

    useEffect(() => {
      const copyRepositories = [...repositories]
      switch (selectedTypeFilter) {
        case "All":
            setSortedRepositories(copyRepositories)
            break;
        case "Private":
            const privateRepositories = copyRepositories.filter(repo => repo.isPrivate === true);
            setSortedRepositories(privateRepositories)
            break;
        case "Public":
            const publicRepositories = copyRepositories.filter(repo => repo.isPrivate === false);
            setSortedRepositories(publicRepositories)
            break;
      
        default:
            break;
      }
    }, [selectedTypeFilter])
    
    return (
        <>
            <div className="fixed w-screen h-screen top-0 left-0"
                onClick={() => setActiveDropdown("none")}></div>
            <div className="absolute -left-[15vw] top-9 flex flex-col w-[40vh] h-fit bg-[#161B22] border-[0.1rem] border-[#30363D] rounded-lg shadow-lg">
                {arrayTitles.map((title, index) => {
                    return (
                        <>
                            {index === 0 &&
                                <div className="flex justify-between items-center py-2 px-4 ">
                                    <Typography
                                        text={title}
                                        color="white"
                                        type="p3"
                                    />
                                    <Typography
                                        text={<RxCross1 />}
                                        color="white"
                                        type="p3"
                                        styles="cursor-pointer"
                                        onClick={() => setActiveDropdown("none")}
                                    />
                                </div>
                            }
                            {index > 0 &&
                                <div>
                                    <div className="flex justify-start items-center py-1 px-4 hover:bg-[#30363D] cursor-pointer border-t-[0.1rem] border-[#30363D]"
                                        onClick={() => setSelectedTypeFilter(title)}>
                                        <Typography
                                            text={<TiTick />}
                                            color="white"
                                            type="p2"
                                            styles={`${selectedTypeFilter === title ? 'visible' : 'invisible'}`}
                                        />
                                        <Typography
                                            text={title}
                                            color="white"
                                            type="p4"
                                            styles={`${index === arrayTitles.length - 1 && 'pb-1'}`}
                                        />
                                    </div>
                                </div>
                            }
                        </>
                    )
                })}
            </div>
        </>
    )
}
