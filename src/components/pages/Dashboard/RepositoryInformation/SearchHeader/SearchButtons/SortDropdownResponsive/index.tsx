import { RxCross1 } from "react-icons/rx"
import { TiTick } from "react-icons/ti"
import { useUI } from "../../../../../../../context/UI/UIContext";
import { sortName, sortStars, sortTime } from "../../../../../../../utils/sort";
import { Typography } from "../../../../../../base/Typography"

interface SortDropdownProps {
    setActiveDropdown: (value: string) => void;
}

export const SortDropdownResponsive: React.FC<SortDropdownProps> = ({ setActiveDropdown }) => {
    const { sortedRepositories, setSortedRepositories, selectedSortFilter, setSelectedSortFilter, setSearchInput, setIsSearching } = useUI()
    const arrayTitles = ["Select order", "Last updated", "Name", "Stars"]

    const handleSelectFilter = (e: React.MouseEvent<HTMLDivElement>, title: string) => {
        setSearchInput("")
        setIsSearching(false)
        setSelectedSortFilter(title)
        const copyRepositories = [...sortedRepositories]
        switch (title) {
            case "Last updated":
                const sortedRepositoresByTime = sortTime(copyRepositories)
                setSortedRepositories([...sortedRepositoresByTime])
                break;
            case "Name":
                const sortedRepositoresByName = sortName(copyRepositories)
                setSortedRepositories([...sortedRepositoresByName])
                break;
            case "Stars":
                const sortedRepositoresByStars = sortStars(copyRepositories)
                setSortedRepositories([...sortedRepositoresByStars])
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
                                <div className="flex justify-start items-center gap-2 py-1 px-4 hover:bg-[#30363D] cursor-pointer border-t-[0.1rem] border-[#30363D]"
                                    onClick={(e) => { handleSelectFilter(e, title) }}>
                                    <Typography
                                        text={<TiTick />}
                                        color="white"
                                        type="p2"
                                        styles={`${selectedSortFilter === title ? 'visible' : 'invisible'} mb-[0.1rem]`}
                                    />
                                    <Typography
                                        text={title}
                                        color="white"
                                        type="p4"
                                        styles={`${index === arrayTitles.length - 1 && 'pb-1'}`}
                                    />
                                </div>
                            }
                        </>
                    )
                })}
            </div>
        </>
    )
}
