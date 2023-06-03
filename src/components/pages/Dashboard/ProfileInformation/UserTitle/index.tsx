import { useUser } from "../../../../../context/UserContext/UserContext"
import { Typography } from "../../../../base/Typography"

export const UserTitle = () => {
    const {user} = useUser()

    return (
        <div className="flex-col mt-2">
            <Typography
                text={user?.userData?.name}
                type="p0"
                color="white"
            />
            <Typography
                text={user?.userData?.login}
                type="p1"
                color="gray"
            />
        </div>
    )
}
