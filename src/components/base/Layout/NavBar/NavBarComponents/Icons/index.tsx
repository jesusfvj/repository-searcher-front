import { useUI } from "../../../../../../context/UI/UIContext"
import { Typography } from "../../../../Typography"
import { BiBell } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { VscTriangleDown } from "react-icons/vsc";
import { useState } from "react";

export const Icons = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const { setShowWorkInProgress } = useUI()

    return (
        <>
            <Typography
                text={<BiBell />}
                type="p2"
                color="white"
                styles="cursor-pointer hover:text-[#BABBBD]"
                onClick={() => setShowWorkInProgress(true)}
            />
            <div className="flex justify-center items-center"
            onClick={() => setShowWorkInProgress(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <Typography
                    text={<AiOutlinePlus />}
                    type="p2"
                    color="white"
                    styles={`cursor-pointer ${isHovered && "text-[#BABBBD]"}`}
                />
                <Typography
                    text={<VscTriangleDown />}
                    type="p5"
                    color="white"
                    styles={`cursor-pointer ${isHovered && "text-[#BABBBD]"}`}
                />
            </div>
        </>
    )
}
