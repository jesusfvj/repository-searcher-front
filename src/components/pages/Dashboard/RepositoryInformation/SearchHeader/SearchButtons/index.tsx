import { useUI } from "../../../../../../context/UI/UIContext"
import { ButtonComponent } from "../../../../../base/ButtonComponent"
import { Typography } from "../../../../../base/Typography"
import { LuBookPlus } from "react-icons/lu"
import { VscTriangleDown } from "react-icons/vsc"

export const SearchButtons = () => {
    const { setShowWorkInProgress } = useUI()
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
                <ButtonComponent
                    text="Type"
                    size="sm"
                    color="gray"
                    dropDown={<Typography
                        text={<VscTriangleDown />}
                        type="p5"
                        color="white"
                    />}
                    onClick={() => setShowWorkInProgress(true)} />
                <ButtonComponent
                    text="Language"
                    size="sm"
                    color="gray"
                    dropDown={<Typography
                        text={<VscTriangleDown />}
                        type="p5"
                        color="white"
                    />}
                    onClick={() => setShowWorkInProgress(true)} />
                <ButtonComponent
                    text="Sort"
                    size="sm"
                    color="gray"
                    dropDown={<Typography
                        text={<VscTriangleDown />}
                        type="p5"
                        color="white"
                    />}
                    onClick={() => setShowWorkInProgress(true)} />
            </div>
            <ButtonComponent
                text="New"
                size="sm"
                color="new"
                icon={<Typography
                    text={<LuBookPlus />}
                    color="white"
                />}
                styles="hidden md:flex"
                onClick={() => setShowWorkInProgress(true)} />
        </div>
    )
}