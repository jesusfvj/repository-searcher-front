import { Typography } from "../../../../base/Typography"
import { MdLocationPin } from "react-icons/md"
import { AiFillLinkedin } from "react-icons/ai"
import { BiTime } from "react-icons/bi"
import { useUI } from "../../../../../context/UI/UIContext"
import { useUser } from "../../../../../context/UserContext/UserContext"

export const PersonalInfo = () => {
    const {user} = useUser()

    const userLinkedin = "in/jesusvj"
    const timeZone = "(UTC +02:00)"

    const { setShowWorkInProgress } = useUI()
    
  return (
    <div className="flex flex-col gap-1">
                <div className="flex justify-start itmes-center gap-2">
                    <Typography
                        text={<MdLocationPin />}
                        type="p1"
                        color="gray"
                    />
                    <Typography
                        text={user?.userData?.location}
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
                        text={user?.userData?.updated_at}
                        type="p3"
                        color="white"
                    />
                </div>
                <div className="flex justify-start itmes-center gap-2">
                    <Typography
                        text={<AiFillLinkedin />}
                        type="p1"
                        color="gray"
                    />
                    <Typography
                        text={userLinkedin}
                        type="p3"
                        color="white"
                        styles="hover:text-[#2F81F7] hover:underline cursor-pointer"
                        onClick={() => setShowWorkInProgress(true)}
                    />
                </div>
            </div>
  )
}
