import { LuBookPlus } from "react-icons/lu"
import { useUI } from "../../../../context/UI/UIContext"
import { ButtonComponent } from "../../../base/ButtonComponent"
import { Typography } from "../../../base/Typography"
import { ProfileInformation } from "../ProfileInformation"
import { RepositoryInformation } from "../RepositoryInformation"
import { RepositoryTitles } from "../RepositoryTitles"

export const DashBoardResponsive = () => {
    const { setShowWorkInProgress } = useUI()
    return (
        <div className="flex flex-col">
            <ProfileInformation />
            <nav className="w-[90vw] h-[7vh] pb-2 px-2 flex items-center border-b-[0.1rem] border-[#1f2328] overflow-scroll">
                <RepositoryTitles />
            </nav>
            <section className="flex flex-col gap-4 px-4 pt-4 h-full border-b-[0.1rem] border-[#1f2328]">
                <div className="h-8">
                    <ButtonComponent
                        text="New"
                        size="sm"
                        color="new"
                        icon={<Typography
                            text={<LuBookPlus />}
                            color="white"
                        />}
                        onClick={() => setShowWorkInProgress(true)} />
                </div>
                <RepositoryInformation />
            </section>
        </div>
    )
}
