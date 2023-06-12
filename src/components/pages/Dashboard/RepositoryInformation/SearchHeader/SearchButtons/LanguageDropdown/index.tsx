import { useEffect, useState } from "react"
import { RxCross1 } from "react-icons/rx"
import { TiTick } from "react-icons/ti"
import { useUI } from "../../../../../../../context/UI/UIContext";
import { Repository } from "../../../../../../../interface/repository";
import { Typography } from "../../../../../../base/Typography"

interface LanguageDropdownProps {
    setActiveDropdown: (value: string) => void;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ setActiveDropdown }) => {
    const { repositories, setSortedRepositories, selectedLanguageFilter, setSelectedLanguageFilter, setSearchInput, setIsSearching, selectedTypeFilter, arrayLanguages, setArrayLanguages } = useUI()
    const [arrayTitles, setArrayTitles] = useState<string[]>([]);

    const handleSelectFilter = (e: React.MouseEvent<HTMLDivElement>, selectedOption: string) => {
        setSearchInput("")
        setIsSearching(false)
        setSelectedLanguageFilter(selectedOption)
        let firstFilterArray:Repository[] = []
        const copyRepositories = [...repositories]

        switch (selectedTypeFilter) {
            case "All":
                firstFilterArray = copyRepositories;
                break;
            case "Private":
                const privateRepositories = copyRepositories.filter(repo => repo.isPrivate === true);
                firstFilterArray = privateRepositories;
                break;
            case "Public":
                const publicRepositories = copyRepositories.filter(repo => repo.isPrivate === false);
                firstFilterArray = publicRepositories;
                break;
            case "Forks":
                const forkedRepositories = copyRepositories.filter(repo => repo.forkCount !== 0);
                firstFilterArray = forkedRepositories;
                break;

            default:
                break;
        }

        arrayLanguages.forEach((language) => {
            if (selectedOption === "All") {
                setSortedRepositories(firstFilterArray)
            } else if (selectedOption === language) {
                const secondFilterRepositories = firstFilterArray.filter(repo => repo?.primaryLanguage?.name === selectedOption);
                setSortedRepositories(secondFilterRepositories)
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
        </>
    )
}