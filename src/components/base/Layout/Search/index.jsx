import { useState } from "react";
import { search, searchById } from "../../../../API/SearchApi";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { useUI } from "../../../../Context/UI/UIContext";
import { SlMagnifier } from "react-icons/sl";
import { Typography } from "../../Typography";
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const navigate = useNavigate()
    const {
        user,
    } = useUser();

    const { setSearchResults,
        topItems,
        setSearchUnderThree,
        setMessageErrorToaster,
        setIsLoading } = useUI()

    const [searchInput, setSearchInput] = useState("");

    const handleSearch = async (query) => {
        setIsLoading(true)
        let response = ""
        if (user?._id) {
            response = await searchById(query, user._id);
        } else {
            response = await search(query);
        }
        setIsLoading(false)
        if (response.ok) {
            setSearchResults({ ...response.results });
        } else (
            setMessageErrorToaster(response.message)
        )
    };

    const handleChange = (event) => {
        setSearchInput(event.target.value);
        navigate('/search')
        if (event.target.value.length >= 3) {
            setSearchUnderThree(false)
            handleSearch(event.target.value);
        } else {
            setSearchUnderThree(true)
            setSearchResults({ items: topItems });
        }
    };

    return (
        <>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search for artists or gifs using keywords. Type 3 letters to start."
                    value={searchInput}
                    className="rounded-3xl py-2 px-8 w-full"
                    onChange={(e) => handleChange(e)}
                />
                <div>
                    <Typography
                        text={<SlMagnifier />}
                        type="p1"
                        color="black"
                        styles="absolute top-[25%] right-5 cursor-pointer"
                    />
                </div>
            </div>
        </>
    )
}
