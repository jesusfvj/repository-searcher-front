import { useState } from "react";
import { RxMagnifyingGlass, RxSlash } from "react-icons/rx";
import { Typography } from "../../../../Typography";
import { SearchModal } from "./SearchModal";

export const SearchBar = () => {
    const [inputClicked, setInputClicked] = useState<boolean>(false);

    const toggleInputModal = () => {
        setInputClicked(!inputClicked)
    };

    return (
        <>
            <div className="flex justify-between items-center md:mr-4 px-1 py-1 w-full md:w-[25vw] hover:bg-[#0D1117] border border-[#33363b] rounded-md cursor-pointer"
                onClick={toggleInputModal}>
                <div className="flex justify-start items-center gap-2">
                    <div>
                        <Typography
                            text={<RxMagnifyingGlass />}
                            type="p1"
                            color="gray"
                        />
                    </div>
                    <div
                        className="rounded text-[#d4d5d6] bg-transparent text-sm">
                        <Typography
                            text="Search or jump to..."
                            type="p3"
                            color="gray"
                        />
                    </div>
                </div>
                <Typography
                    text={<RxSlash />}
                    type="p3"
                    color="gray"
                    styles="rounded p-[0.1rem] border border-[#33363b] text-center"
                />
            </div>

            {inputClicked &&
                <SearchModal toggleInputModal={toggleInputModal}/>
            }
        </>
    )
}