import "../../../index.css"
import { ReactNode } from "react";

interface ButtonComponentProps {
    text: string | ReactNode,
    size: "md" | "sm" | "xs",
    color: "danger" | "blue" | "gray" | "black" | "transparent",
    styles?: string,
    onClick: () => void,
}

export const ButtonComponent = ({ text = "", size = "md", color = "gray", styles, onClick }: ButtonComponentProps): JSX.Element => {

    const buttonColors = {
        danger: "bg-gradient-to-tl from-red-900 to-red-500 text-gray-50 enabled:hover:brightness-105",
        blue: "bg-gradient-to-tl from-[#BC7DFF] to-[#9461c9] text-gray-50 enabled:hover:brightness-105",
        gray: `bg-[#21262E] text-[#C9D1D8] border border-[#363B42] hover:bg-[#30363D] hover:border-[#8B949E]`,
        black: "bg-gradient-to-tl from-[#02050d] to-gray-700 text-gray-300 enabled:hover:brightness-150",
        transparent: "transparent",
    };

    const sizes = {
        md: "text-sm lg:text-base px-5 py-2",
        sm: "text-xs lg:text-sm px-4 py-1",
        xs: "text-xs lg:text-xs px-3 py-1",
    };

    const finalClassName = `w-full h-full system flex justify-center items-center cursor-pointer rounded-lg transition ${sizes[size]} ${buttonColors[color]} hover:${buttonColors[color]}/80 active:scale-[0.995] active:translate-y-[0.5px]`;

    return (
        <button onClick={onClick} className={`${finalClassName} ${styles}`}>
            {text}
        </button>
    )
}
