import { useState, ChangeEvent } from "react";
import { SearchButtons } from "./SearchButtons";

export const SearchHeader = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 pb-4 md:py-4 w-full border-b-[0.1rem] border-[#1f2328]">
      <div className={`${isClicked ? 'border-2 border-[#2F81F7]':'border border-[#33363b]'} rounded-md px-3 py-[0.3rem] w-full`}>
        <input
          type="text"
          value={searchInput}
          placeholder="Find a repository..."
          className="bg-transparent w-full text-[#777E89] text-sm sm:text-[0.9rem] font-normal"
          onChange={(e) => handleChange(e)}
          onFocus={()=>setIsClicked(true)}
          onBlur={()=>setIsClicked(false)}
        />
      </div>
      <SearchButtons />
    </div>
  )
}