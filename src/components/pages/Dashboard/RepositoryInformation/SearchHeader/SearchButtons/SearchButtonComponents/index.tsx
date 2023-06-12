import { LanguageDropdown } from "../LanguageDropdown";
import { SortDropdown } from "../SortDropdown";
import { TypeDropdown } from "../TypeDropdown"

interface SearchButtonComponentsProps {
  setActiveDropdown: (value: string) => void;
  activeDropdown: string;
}

export const SearchButtonComponents: React.FC<SearchButtonComponentsProps> = ({ activeDropdown, setActiveDropdown }) => {

  return (
    <>
      <div className="hidden md:flex fixed w-screen h-screen top-0 left-0"
        onClick={() => setActiveDropdown("none")}></div>
      {activeDropdown === "type" &&
        <div className="hidden md:flex absolute -left-[15vw] top-9 flex-col w-[40vh] h-fit bg-[#161B22] border-[0.1rem] border-[#30363D] rounded-lg shadow-lg">
          <TypeDropdown setActiveDropdown={setActiveDropdown} />
        </div>
      }
      {activeDropdown === "language" &&
        <div className="hidden md:flex absolute -left-[12.5vw] top-9 flex-col w-[40vh] h-fit bg-[#161B22] border-[0.1rem] border-[#30363D] rounded-lg shadow-lg">
          <LanguageDropdown setActiveDropdown={setActiveDropdown} />
        </div>
      }
      {activeDropdown === "sort" &&
        <div className="hidden md:flex absolute -left-[15.3vw] top-9 flex-col w-[40vh] h-fit bg-[#161B22] border-[0.1rem] border-[#30363D] rounded-lg shadow-lg">
          <SortDropdown setActiveDropdown={setActiveDropdown} />
        </div>
      }
    </>
  )
}