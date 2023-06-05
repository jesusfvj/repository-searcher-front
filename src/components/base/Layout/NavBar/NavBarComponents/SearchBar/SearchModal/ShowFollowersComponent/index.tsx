import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useUI } from "../../../../../../../../context/UI/UIContext";
import { useUser } from "../../../../../../../../context/UserContext/UserContext"
import { removeDuplicates } from "../../../../../../../../utils/manipulateArrayObjects";
import { ProfilePhoto } from "../../../../../../ProfilePhoto";
import { Typography } from "../../../../../../Typography"

interface SearchModalProps {
    toggleInputModal: () => void,
}

export const ShowFollowersComponent = ({ toggleInputModal }: SearchModalProps): JSX.Element => {
    
    const { user } = useUser()
    const navigate = useNavigate()
    const { friendsArray,
        setFriendsArray } = useUI()

    const redirectToUsersPage = async (userId: string) => {
        navigate(`/user/${userId}`)
        toggleInputModal()
    }

    useEffect(() => {
        const unitedArray = user?.userData?.followers?.nodes.concat(user?.userData?.following?.nodes);
        const arrayWithoutDuplicates = removeDuplicates(unitedArray)
        setFriendsArray(arrayWithoutDuplicates)
    }, [])

    return (
        <>
            {
                friendsArray && friendsArray.length !== 0 &&
                friendsArray.map((user, index) => {
                    return (
                        <div key={index}>
                            {index === 0 &&
                                <Typography
                                    text="Users"
                                    type="p3"
                                    color="gray"
                                    styles="mb-4"
                                />
                            }
                            <div className="flex justify-between items-center w-full gap-4 hover:bg-[#21262B] cursor-pointer rounded px-4 py-2"
                                onClick={() => redirectToUsersPage(user.id)}>
                                <div className="flex justify-center items-center gap-4">
                                    <ProfilePhoto size="md" followerUrl={user.avatarUrl}
                                    />
                                    <Typography
                                        text={user.login}
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
            }</>
    )
}
