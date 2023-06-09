import { Typography } from "../../../../base/Typography"
import { MdLocationPin } from "react-icons/md"
import { AiFillGithub } from "react-icons/ai"
import { BiTime } from "react-icons/bi"
import { useUser } from "../../../../../context/UserContext/UserContext"
import { useUI } from "../../../../../context/UI/UIContext"
import { useParams } from "react-router-dom"

export const PersonalInfo = () => {
    const { user } = useUser()
    const { foundUser } = useUI()
    const { userId } = useParams()

    const redirectToGitHub = () => {
        window.open(userId ? foundUser?.url : user?.userData?.url, "_blank");
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-start itmes-center gap-2">
                <Typography
                    text={<MdLocationPin />}
                    type="p1"
                    color="gray"
                />
                <Typography
                    text={userId ? foundUser?.location : user?.userData?.location}
                    type="p3"
                    color="white"
                />
            </div>
            <div className="flex justify-start itmes-center gap-2">
                <Typography
                    text={<BiTime />}
                    type="p1"
                    color="gray"
                />
                <Typography
                    text={userId? foundUser?.updatedAt : user?.userData?.updatedAt}
                    type="p3"
                    color="white"
                />
            </div>
            <div className="flex justify-start itmes-center gap-2">
                <Typography
                    text={<AiFillGithub />}
                    type="p1"
                    color="gray"
                />
                <Typography
                    text={`github/${userId? foundUser?.login : user?.userData?.login}`}
                    type="p3"
                    color="white"
                    styles="hover:text-[#2F81F7] hover:underline cursor-pointer"
                    onClick={redirectToGitHub}
                />
            </div>
        </div>
    )
}
