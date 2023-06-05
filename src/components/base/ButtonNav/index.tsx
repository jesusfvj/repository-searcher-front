import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { useUI } from "../../../context/UI/UIContext";
import { useUser } from "../../../context/UserContext/UserContext";
import { Typography } from "../Typography"

interface ButtonNavProps {
    icon: ReactNode;
    text: string;
    onClick?:  () => void;
}

export const ButtonNav = ({ icon, text, onClick }: ButtonNavProps): JSX.Element => {
    const {user} = useUser()
    const {foundUser} = useUI()
    const {userId} = useParams()

    return (
        <>
            <div className="relative flex justify-center items-center gap-2 hover:bg-[#21262B] rounded-lg py-2 px-4 cursor-pointer"
            onClick={onClick}>
                <Typography
                    text={icon}
                    type="p2"
                    color="gray"
                />
                <Typography
                    text={text}
                    type="p3"
                    color="white"
                />
                {text === "Repositories" &&
                    <Typography
                        text={userId?foundUser?.repositories?.totalCount:user?.userData?.repositories?.totalCount}
                        type="p3"
                        color="white"
                        styles="bg-[#40464D] rounded-full px-2"
                    />
                }
            {text === "Repositories" &&
                <div className="absolute -bottom-2 border-b-2 border-[#F78166] h-1 w-full">
                </div>
            }
            </div>
        </>
    )
}
