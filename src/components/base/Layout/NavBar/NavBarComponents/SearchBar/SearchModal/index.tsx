import { useState, ChangeEvent, useEffect } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { LuBookMarked } from "react-icons/lu"
import { RxMagnifyingGlass } from "react-icons/rx"
import { useUI } from "../../../../../../../context/UI/UIContext"
import { useUser } from "../../../../../../../context/UserContext/UserContext"
import { Repository } from "../../../../../../../interface/repository"
import { highlightString } from "../../../../../../../utils/colorSelectedTextWindow"
import { Typography } from "../../../../../Typography"
import { ShowFollowersComponent } from "./ShowFollowersComponent"

interface SearchModalProps {
    toggleInputModal: () => void,
}

export const SearchModal = ({ toggleInputModal }: SearchModalProps): JSX.Element => {
    const { user } = useUser()
    const { repositories, foundUser, friendsArray, setShowWorkInProgress, setSortedFriendsArray } = useUI()
    const [showFollowers, setShowFollowers] = useState<boolean>(false)
    const [userNameToShow, setUserNameToShow] = useState<string>("")
    const [repositoriesToShow, setRepositoriesToShow] = useState<Repository[]>([])
    const [searchInput, setSearchInput] = useState<string>(`owner:${foundUser?.id ? foundUser?.login : user?.userData?.login}/`);

    const redirectToGitHub = (url: string) => {
        window.open(url, "_blank");
    }

    useEffect(() => {
        highlightString(foundUser?.id ? foundUser?.login : user?.userData?.login)
        setUserNameToShow(foundUser?.id ? foundUser?.login : user?.userData?.login)
        setRepositoriesToShow(repositories)
    }, [])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputString = event.target.value;
        setSearchInput(inputString);

        if (inputString.startsWith('owner:')) {
            if (inputString === 'owner:') {
                setShowFollowers(true);
                setSortedFriendsArray(friendsArray);
            } else if (inputString.startsWith(`owner:${userNameToShow}/`)) {
                const query = inputString.replace(`owner:${userNameToShow}/`, '');
                searchRepositories(query);
                setShowFollowers(false);
            } else {
                const query = inputString.replace('owner:', '');
                searchUsers(query);
                setShowFollowers(true);
            }
        }
    };

    const searchRepositories = (query: string) => {
        const lowerCaseQuery = query.toLowerCase();
        const foundRepositories = repositories.filter(({ name }) => {
            return name && name.toLowerCase().includes(lowerCaseQuery);
        });
        setRepositoriesToShow(foundRepositories);
    };

    const searchUsers = (query: string) => {
        const lowerCaseQuery = query.toLowerCase()
        const foundUsers = [...friendsArray].filter((user) => {
            return user && user.login.toLowerCase().includes(lowerCaseQuery);
        });
        setSortedFriendsArray(foundUsers);
    };


    return (
        <div className="relative z-[100]">
            <div className="fixed top-0 bottom-0 h-screen w-screen bg-black opacity-10"
                onClick={toggleInputModal}></div>
            <div className="fixed top-[0.1rem] left-[2.5vw] md:left-[5vw] flex flex-col justify-start items-center w-[95vw] md:w-[80vw] min-h-[25%] max-h-[75%] border border-[#33363b] px-3 pt-3 rounded-lg bg-[#0D1117]">
                <div className="flex justify-between items-center gap-2 rounded-md w-full h-[5.7vh] pt-1 px-2 text-[#d4d5d6] border-2 border-[#2F81F7] text-sm">
                    <div className="flex justify-between items-center gap-2 w-full">
                        <div className="w-4">
                            <Typography
                                text={<RxMagnifyingGlass />}
                                type="p1"
                                color="gray"
                            />
                        </div>
                        <input
                            type="text"
                            value={searchInput}
                            className="bg-transparent text-white w-full"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="mb-1 hover:bg-[#21262B] pt-1 px-2 pb-[0.3rem] cursor-pointer"
                        onClick={toggleInputModal}>
                        <Typography
                            text={<AiFillCloseCircle />}
                            type="p1"
                            color="gray"
                        />
                    </div>
                </div>
                <div className="w-full px-2 py-6 flex flex-col gap-2 border-b border-[#33363b] overflow-scroll">
                    {
                        showFollowers ?
                            <ShowFollowersComponent toggleInputModal={toggleInputModal} />
                            :
                            repositoriesToShow && repositoriesToShow.length !== 0 &&
                            repositoriesToShow.map((repository, index) => {
                                return (
                                    <div key={index}>
                                        {index === 0 &&
                                            <Typography
                                                text="Repositories"
                                                type="p3"
                                                color="gray"
                                                styles="mb-4"
                                            />
                                        }
                                        <div className="flex justify-between items-center w-full gap-4 hover:bg-[#21262B] cursor-pointer rounded px-4 py-2"
                                            onClick={() => redirectToGitHub(repository.url)}>
                                            <div className="flex justify-center items-center gap-4">
                                                <Typography
                                                    text={<LuBookMarked />}
                                                    type="p2"
                                                    color="gray"
                                                />
                                                <Typography
                                                    text={`${userNameToShow}/${repository.name}/`}
                                                    type="p3"
                                                    color="white"
                                                />
                                            </div>
                                            <div className="hidden md:flex">
                                                <Typography
                                                    text="Jump to"
                                                    type="p3"
                                                    color="gray"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }

                </div>
                <div className="flex justify-between w-full pt-3 px-2">
                    <div onClick={() => setShowWorkInProgress(true)}>
                        <Typography
                            text="Search syntax tips"
                            type="p3"
                            color="blue"
                            styles="mb-4 cursor-pointer hover:underline"
                        />
                    </div>
                    <div>
                        <div onClick={() => setShowWorkInProgress(true)}>
                            <Typography
                                text="Give feedback"
                                type="p3"
                                color="blue"
                                styles="mb-4 cursor-pointer hover:underline"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
