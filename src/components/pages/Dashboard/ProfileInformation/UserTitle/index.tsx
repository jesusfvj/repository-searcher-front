import { Typography } from "../../../../base/Typography"

export const UserTitle = () => {
    const userName = "Jesus Velazquez Jurado"
    const userNickName = "jesusfvj"
    return (
        <div className="flex-col mt-2">
            <Typography
                text={userName}
                type="p0"
                color="white"
            />
            <Typography
                text={userNickName}
                type="p1"
                color="gray"
            />
        </div>
    )
}
