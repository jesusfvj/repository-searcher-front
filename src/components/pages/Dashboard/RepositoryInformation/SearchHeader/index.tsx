import { useState, ChangeEvent } from "react";
import { SearchButtons } from "./SearchButtons";

export const SearchHeader = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="flex items-center gap-4 py-4 w-full">
      <div className=" border border-[#33363b] rounded-md px-3 py-[0.3rem] w-full">
        <input
          type="text"
          value={searchInput}
          placeholder="Find a repository..."
          className="bg-transparent w-full text-[#777E89] text-sm sm:text-[0.9rem] font-normal"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <SearchButtons />
    </div>
  )
}