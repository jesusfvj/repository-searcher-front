import { useState } from "react"
import { MdPeopleAlt } from "react-icons/md"
import { useUI } from "../../../../../context/UI/UIContext"
import { useUser } from "../../../../../context/UserContext/UserContext"
import { Typography } from "../../../../base/Typography"

export const FollowerFollowingInfo = () => {
    const {user} = useUser()
    const [isHoveredOne, setIsHoveredOne] = useState<boolean>(false)
    const [isHoveredTwo, setIsHoveredTwo] = useState<boolean>(false)
    const { setShowWorkInProgress } = useUI()

    return (
        <div className="flex justify-start items-center gap-1">
            <div className="flex justify-start items-center gap-1 cursor-pointer"
                onMouseEnter={() => setIsHoveredOne(true)}
                onMouseLeave={() => setIsHoveredOne(false)}
                onClick={() => setShowWorkInProgress(true)}>
                <Typography
                    text={<MdPeopleAlt />}
                    type="p3"
                    color={`${isHoveredOne ? 'blue' : 'gray'}`}
                />
                <Typography
                    text={user?.userData?.followers}
                    type="p3"
                    color={`${isHoveredOne ? 'blue' : 'white'}`}
                />
                <Typography
                    text="followers"
                    type="p3"
                    color={`${isHoveredOne ? 'blue' : 'gray'}`}
                />
            </div>
            <Typography
                text="."
                type="p3"
                color="white"
                styles="mb-1"
            />
            <div className="flex justify-start items-center gap-1 cursor-pointer"
                onMouseEnter={() => setIsHoveredTwo(true)}
                onMouseLeave={() => setIsHoveredTwo(false)}
                onClick={() => setShowWorkInProgress(true)}>
                <Typography
                    text={user?.userData?.following}
                    type="p3"
                    color={`${isHoveredTwo ? 'blue' : 'white'}`}
                />
                <Typography
                    text="following"
                    type="p3"
                    color={`${isHoveredTwo ? 'blue' : 'gray'}`}
                />
            </div>
        </div>
    )
}
