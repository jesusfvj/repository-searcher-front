import { RxCross1 } from "react-icons/rx"
import { TiTick } from "react-icons/ti"
import { useUI } from "../../../../../../../context/UI/UIContext";
import { Typography } from "../../../../../../base/Typography"

interface TypeDropdownProps {
    setActiveDropdown: (value: string) => void;
}

export const TypeDropdownResponsive: React.FC<TypeDropdownProps> = ({ setActiveDropdown }) => {
    const { repositories, setSortedRepositories, selectedTypeFilter, setSelectedTypeFilter, setSearchInput, setIsSearching } = useUI()
    const arrayTitles = ["Select type", "All", "Public", "Private", "Forks"]

    const handleSelectFilter = (e: React.MouseEvent<HTMLDivElement>, title: string) => {
        setSearchInput("")
        setIsSearching(false)
        setSelectedTypeFilter(title)
        const copyRepositories = [...repositories]
        switch (title) {
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
            case "Forks":
                const forkedRepositories = copyRepositories.filter(repo => repo.forkCount !== 0);
                setSortedRepositories(forkedRepositories)
                break;

            default:
                break;
        }
        e.stopPropagation();
        setTimeout(() => {
            setActiveDropdown("none")
        }, 200);
    }

    return (
        <>
            <div className="w-[95vw] flex flex-col h-fit bg-[#161B22] border-[0.1rem] border-[#30363D] rounded-md mt-3">
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
                                    <div className="flex justify-start items-center gap-2 py-1 px-4 hover:bg-[#30363D] cursor-pointer border-t-[0.1rem] border-[#30363D]"
                                        onClick={(e) => { handleSelectFilter(e, title) }}>
                                        <Typography
                                            text={<TiTick />}
                                            color="white"
                                            type="p2"
                                            styles={`${selectedTypeFilter === title ? 'visible' : 'invisible'} mb-[0.1rem]`}
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
