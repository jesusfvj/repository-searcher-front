import { useUI } from "../../../../context/UI/UIContext"
import { Logo } from "../../Logo"
import { Typography } from "../../Typography"

export const Footer = () => {
    const { setShowWorkInProgress } = useUI()
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-4 gap-4 md:gap-0">
            <div className="hidden md:flex items-center gap-2">
                <Logo type="p0" color="gray" />
                <Typography
                    text="© 2023 GitHub, Inc."
                    type="p4"
                    color="gray"
                />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-10">
                <Typography
                    text="Terms"
                    type="p4"
                    color="blue"
                    styles="cursor-pointer hover:underline"
                    onClick={() => setShowWorkInProgress(true)}
                />
                <Typography
                    text="Privacy"
                    type="p4"
                    color="blue"
                    styles="cursor-pointer hover:underline"
                    onClick={() => setShowWorkInProgress(true)}
                />
                <Typography
                    text="Security"
                    type="p4"
                    color="blue"
                    styles="cursor-pointer hover:underline"
                    onClick={() => setShowWorkInProgress(true)}
                />
                <Typography
                    text="Status"
                    type="p4"
                    color="blue"
                    styles="cursor-pointer hover:underline"
                    onClick={() => setShowWorkInProgress(true)}
                />
                <Typography
                    text="Docs"
                    type="p4"
                    color="blue"
                    styles="cursor-pointer hover:underline"
                    onClick={() => setShowWorkInProgress(true)}
                />
                <Typography
                    text="Contact GitHub"
                    type="p4"
                    color="blue"
                    styles="cursor-pointer hover:underline"
                    onClick={() => setShowWorkInProgress(true)}
                />
                <Typography
                    text="Pricing"
                    type="p4"
                    color="blue"
                    styles="cursor-pointer hover:underline"
                    onClick={() => setShowWorkInProgress(true)}
                />
                <Typography
                    text="API"
                    type="p4"
                    color="blue"
                    styles="cursor-pointer hover:underline"
                    onClick={() => setShowWorkInProgress(true)}
                />
                <Typography
                    text="Training"
                    type="p4"
                    color="blue"
                    styles="cursor-pointer hover:underline"
                    onClick={() => setShowWorkInProgress(true)}
                />
                <Typography
                    text="Blog"
                    type="p4"
                    color="blue"
                    styles="cursor-pointer hover:underline"
                    onClick={() => setShowWorkInProgress(true)}
                />
                <Typography
                    text="About"
                    type="p4"
                    color="blue"
                    styles="cursor-pointer hover:underline"
                    onClick={() => setShowWorkInProgress(true)}
                />
            </div>
            {/**
                *Next section is set to invisible to take up space
            */}
            <div className="hidden md:flex items-center gap-2 invisible">
                <Logo type="p0" color="gray" />
                <Typography
                    text="© 2023 GitHub, Inc."
                    type="p4"
                    color="gray"
                />
            </div>
            <div className="md:hidden flex items-center gap-2">
                <Logo type="p0" color="gray" />
                <Typography
                    text="© 2023 GitHub, Inc."
                    type="p4"
                    color="gray"
                />
            </div>
        </div>
    )
}