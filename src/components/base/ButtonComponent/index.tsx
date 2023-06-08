import "../../../index.css"
import { ReactNode } from "react";

export interface ButtonComponentProps {
    text: string | ReactNode,
    size: "md" | "sm" | "xs",
    color: "gray" | "new",
    styles?: string,
    icon?: ReactNode,
    roundSide?: "left" | "right" | "none",
    dropDown?: ReactNode,
    onClick: () => void,
}

export const ButtonComponent = ({ text = "", size = "md", color = "gray", roundSide="none", icon, dropDown, styles, onClick }: ButtonComponentProps): JSX.Element => {

    const buttonColors = {
        gray: `bg-[#21262E] text-[#C9D1D8] border border-[#363B42] hover:bg-[#30363D] hover:border-[#8B949E]`,
        new: `bg-[#238636] text-[#ffffff] border border-[#30914C] hover:bg-[#46a056]`,
        transparent: "transparent",
    };

    const side = {
        right: "rounded-r-md",
        left: "rounded-l-md",
        none: "rounded-md"
    }

    const sizes = {
        md: "text-sm lg:text-base px-5 py-2",
        sm: "text-xs lg:text-sm px-4 py-1",
        xs: "text-xs lg:text-xs px-3 py-1",
    };

    const finalClassName = `w-full h-full system flex justify-center items-center cursor-pointer ${side[roundSide]} transition ${sizes[size]} ${buttonColors[color]} hover:${buttonColors[color]}/80 active:scale-[0.995] active:translate-y-[0.5px]`;

    return (
        <button onClick={onClick} className={`${finalClassName} ${styles}`}>
            <div className="flex justify-center items-center gap-1">
            {icon}{text}{dropDown}
            </div>
        </button>
    )
}
