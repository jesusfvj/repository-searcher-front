import { ProfilePhoto } from "../../../base/ProfilePhoto"
import { Typography } from "../../../base/Typography"
import { ButtonComponent } from "../../../base/ButtonComponent"
import { useUI } from "../../../../context/UI/UIContext"
import { UserTitle } from "./UserTitle"
import { FollowerFollowingInfo } from "./FollowerFollowingInfo"
import { PersonalInfo } from "./PersonalInfo"

export const ProfileInformation = () => {
    const profileDescription = "Full Stack Developer | Html5 | CSS3 | JavaScript | Node.js | Express.js | MongoDB | React | Tailwind | PhP |#AssemblerInstituteofTechnology"

    const { setShowWorkInProgress } = useUI()

    return (
        <div className="flex flex-col justify-start gap-8 w-1/4 h-full pb-10">
            <ProfilePhoto size="xxl" editProfile={true} />
            <UserTitle />
            <div className="flex flex-col gap-5">
                <Typography
                    text={profileDescription}
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
        </div>
    )
}
