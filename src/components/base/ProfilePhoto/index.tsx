import { useState } from "react"
import { Typography } from "../Typography";
import { VscTriangleDown } from "react-icons/vsc";
import { AiOutlineSmile } from "react-icons/ai";
import { useUser } from "../../../context/UserContext/UserContext";

interface ProfilePhotoProp {
    size: "lg" | "md" | "sm" | "xxl";
    icon?: boolean;
    editProfile?: boolean;
    onClick?: ()=>void;
}

export const ProfilePhoto = ({ size = "md", icon = false, editProfile = false, onClick }: ProfilePhotoProp): JSX.Element => {
    const {user} = useUser()
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isHoveredStatus, setIsHoveredStatus] = useState<boolean>(false)

    const types: Record<string, string> = {
        xxl: `w-[22vw] h-[22vw]`,
        lg: `w-[10vw] h-[10vw]`,
        md: `w-[5vw] h-[5vw]`,
        sm: `w-[2vw] h-[2vw]`,
    };

    return (
        <div className="relative flex justify-center items-center rounded-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <div className={`rounded-full border border-[#666d74] ${types[size]} cursor-pointer`}>
                <img src={user?.userData?.avatarUrl} alt="profile photo" className="w-full h-full rounded-full" />
            </div>
            {icon &&
                <Typography
                    text={<VscTriangleDown />}
                    type="p5"
                    color="white"
                    styles={`cursor-pointer ${isHovered && "text-[#BABBBD]"}`}
                />
            }
            {editProfile &&
                <div className={`hidden md:flex absolute ${isHoveredStatus ? '-right-[5.1vw]' : 'right-0'} bottom-11 flex justify-center items-center gap-2 w-fit h-fit p-2 bg-[#0D1117] rounded-full border border-[#666d74] cursor-pointer ${isHoveredStatus && 'shadow-lg'}`}
                    onMouseEnter={() => setIsHoveredStatus(true)}
                    onMouseLeave={() => setIsHoveredStatus(false)}>
                    <Typography
                        text={<AiOutlineSmile />}
                        type="p1"
                        color={`${isHoveredStatus ? 'blue' : 'gray'}`}
                    />
                    {isHoveredStatus &&
                        <Typography
                            text="Set status"
                            type="p4"
                            color={`${isHoveredStatus ? 'blue' : 'gray'}`}
                            styles="mt-[0.1rem]"
                        />
                    }
                </div>
            }
            {editProfile && isHovered && !isHoveredStatus &&
                <>
                    <div className="hidden md:flex absolute -bottom-5 bg-[#6E7681] h-4 w-4 rotate-45"></div>
                    <div className="absolute -bottom-10 bg-[#6E7681] w-[30vw] md:w-fit h-fit md:h-[5vh] py-2 md:py-0 px-3 rounded-lg flex justify-center items-center text-center">
                        <Typography
                            text="Change your avatar"
                            type="p5"
                            color="white"
                        />
                    </div>
                </>
            }
        </div>
    )
}
