import { useParams } from "react-router-dom"
import { useUI } from "../../../../../context/UI/UIContext"
import { useUser } from "../../../../../context/UserContext/UserContext"
import { Typography } from "../../../../base/Typography"

export const UserTitle = () => {
    const { user } = useUser()
    const { foundUser } = useUI()
    const { userId } = useParams()

    return (
        <div className="flex-col mt-2">
            <Typography
                text={userId ? foundUser?.name : user?.userData?.name}
                type="p0"
                color="white"
            />
            <Typography
                text={userId ? foundUser?.login : user?.userData?.login}
                type="p1"
                color="gray"
            />
        </div>
    )
}
