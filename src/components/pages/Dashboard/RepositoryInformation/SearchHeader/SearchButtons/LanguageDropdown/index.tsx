import { useEffect, useState } from "react"
import { RxCross1 } from "react-icons/rx"
import { TiTick } from "react-icons/ti"
import { useUI } from "../../../../../../../context/UI/UIContext";
import { Typography } from "../../../../../../base/Typography"

interface LanguageDropdownProps {
    setActiveDropdown: (value: string) => void;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ setActiveDropdown }) => {
    const { repositories, setSortedRepositories, selectedLanguageFilter, setSelectedLanguageFilter, setSearchInput, setIsSearching } = useUI()
    const [arrayTitles, setArrayTitles] = useState<string[]>([]);
    const [arrayLanguages, setArrayLanguages] = useState<string[]>([]);

    const handleSelectFilter = (e: React.MouseEvent<HTMLDivElement>, selectedOption: string) => {
        setSearchInput("")
        setIsSearching(false)
        setSelectedLanguageFilter(selectedOption)
        const copyRepositories = [...repositories]
        arrayLanguages.forEach((language) => {
            if (selectedOption === "All") {
                setSortedRepositories(copyRepositories)
            } else if (selectedOption === language) {
                const privateRepositories = copyRepositories.filter(repo => repo?.primaryLanguage?.name === selectedOption);
                setSortedRepositories(privateRepositories)
            }
        })
        e.stopPropagation();
        setTimeout(() => {
            setActiveDropdown("none")
        }, 200);
    }

    useEffect(() => {
        const uniqueLanguageNames: any = [...new Set(repositories?.map(repo => {
            if (typeof repo.primaryLanguage === 'object' && repo.primaryLanguage !== null && 'name' in repo.primaryLanguage) {
                return repo.primaryLanguage.name;
            };
        }))];
        const uniqueLanguageNamesFiltered = [...uniqueLanguageNames].filter(name => name !== null && name !== undefined && typeof name === 'string');
        setArrayLanguages([...uniqueLanguageNamesFiltered])
        uniqueLanguageNamesFiltered.unshift("All");
        uniqueLanguageNamesFiltered.unshift("Select language");
        setArrayTitles(uniqueLanguageNamesFiltered)
    }, [selectedLanguageFilter])


    return (
        <>
            <div className="fixed w-screen h-screen top-0 left-0"
                onClick={() => setActiveDropdown("none")}></div>
            <div className="absolute -left-[12.5vw] top-9 flex flex-col w-[40vh] h-fit bg-[#161B22] border-[0.1rem] border-[#30363D] rounded-lg shadow-lg">
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
                                        styles={`${selectedLanguageFilter === title ? 'visible' : 'invisible'} mb-[0.1rem]`}
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