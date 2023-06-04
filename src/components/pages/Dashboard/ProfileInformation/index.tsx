import { ProfilePhoto } from "../../../base/ProfilePhoto"
import { Typography } from "../../../base/Typography"
import { ButtonComponent } from "../../../base/ButtonComponent"
import { useUI } from "../../../../context/UI/UIContext"
import { UserTitle } from "./UserTitle"
import { FollowerFollowingInfo } from "./FollowerFollowingInfo"
import { PersonalInfo } from "./PersonalInfo"
import { useState } from "react"
import { AiOutlineSmile } from "react-icons/ai"
import { useUser } from "../../../../context/UserContext/UserContext"

export const ProfileInformation = () => {
    const {user} = useUser()
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const { setShowWorkInProgress } = useUI()

    return (
        <div className="flex flex-col justify-start gap-8 w-full md:w-1/4 h-full pb-10 px-3 md:px-0">
            <div className="flex flex-row md:flex-col gap-8 pt-8 md:pt-0">
                <ProfilePhoto size="xxl" editProfile={true} onClick={() => setShowWorkInProgress(true)}/>
                <UserTitle />
            </div>
            {/** The following element only shows in small resolution: */}
            <div className={`flex md:hidden justify-center items-center gap-2 w-full h-fit px-2 py-1 bg-[#0D1117] rounded-md border border-[#666d74] cursor-pointer`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setShowWorkInProgress(true)}>
                <Typography
                    text={<AiOutlineSmile />}
                    type="p1"
                    color={`${isHovered ? 'blue' : 'gray'}`}
                />
                    <Typography
                        text="Set status"
                        type="p4"
                        color={`${isHovered ? 'blue' : 'gray'}`}
                        styles="mt-[0.1rem]"
                    />
            </div>
            <div className="flex flex-col gap-5">
                <Typography
                    text={user?.userData?.bio}
                    type="p2"
                    color="white"
                />
                <ButtonComponent
                    text="Edit profile"
                    size="md"
                    color="gray"
                    onClick={() => setShowWorkInProgress(true)} />
                <FollowerFollowingInfo />
            </div>
            <PersonalInfo />
        </div >
    )
}
