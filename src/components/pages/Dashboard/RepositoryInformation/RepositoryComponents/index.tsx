import { useUI } from "../../../../../context/UI/UIContext";
import { Typography } from "../../../../base/Typography"
import { BiGitRepoForked } from "react-icons/bi"
import { useState } from "react";
import { ButtonComponent } from "../../../../base/ButtonComponent";
import { AiOutlineStar } from "react-icons/ai";
import { VscTriangleDown } from "react-icons/vsc";

interface RepositoryComponentsProps {
    repository: {
        title: string,
        description: string,
        language: string,
        lastUpdated: string,
        forked: string,
        forkedFrom?: string,
        isPublic: boolean,
    };
}

export const RepositoryComponents = ({ repository }: RepositoryComponentsProps): JSX.Element => {
    const { setShowWorkInProgress } = useUI()
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const { title,
        description,
        language,
        lastUpdated,
        forked,
        forkedFrom,
        isPublic } = repository

    return (
        <div className="flex flex-col md:flex-row justify-between border-b-[0.1rem] border-[#1f2328] py-6">
            <div className="flex flex-col gap-1">
                <div className="flex flex-col md:flex-row gap-2 items-start md:items-center pb-2 md:pb-0">
                    <Typography
                        text={title}
                        type="p0"
                        color="blue"
                        styles="cursor-pointer hover:text-[#2F81F7] hover:underline"
                        onClick={() => setShowWorkInProgress(true)}
                    />
                    <Typography
                        text={`${isPublic ? 'Public' : 'Private'}`}
                        type="p4"
                        color={`${isPublic ? 'gray' : 'danger'}`}
                        styles="border border-[#33363b] rounded-full px-2 h-6 pt-[0.15rem] w-fit"
                    />
                </div>
                <Typography
                    text={description}
                    type="p3"
                    color="gray"
                />
                {forkedFrom &&
                    <div className="flex gap-1">
                        <Typography
                            text="Forked from"
                            type="p5"
                            color="gray"
                        />
                        <Typography
                            text={forkedFrom}
                            type="p5"
                            color="gray"
                            styles="cursor-pointer hover:text-[#2F81F7]"
                            onClick={() => setShowWorkInProgress(true)}
                        />
                    </div>
                }
                <div className="flex gap-4 mt-4">
                    <Typography
                        text={language}
                        type="p5"
                        color="gray"
                    />
                    {forked !== "0" &&
                        <div className="flex gap-1 items-center cursor-pointer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => setShowWorkInProgress(true)}>
                            <Typography
                                text={<BiGitRepoForked />}
                                type="p2"
                                color={`${isHovered ? 'blue' : 'gray'}`}
                            />
                            <Typography
                                text={forked}
                                type="p5"
                                color={`${isHovered ? 'blue' : 'gray'}`}
                            />
                        </div>
                    }
                    <Typography
                        text={lastUpdated}
                        type="p5"
                        color="gray"
                    />
                </div>
            </div>
            <div className="flex flex-row md:flex-col items-between pt-4 md:pt-0">
                <div className="flex w-[30vw] h-[4vh] md:h-fit md:w-full">
                    <ButtonComponent
                        text="Star"
                        size="sm"
                        color="gray"
                        roundSide="left"
                        icon={<AiOutlineStar />}
                        onClick={() => setShowWorkInProgress(true)} />
                    <ButtonComponent
                        text=""
                        size="sm"
                        color="gray"
                        roundSide="right"
                        dropDown={<Typography
                            text={<VscTriangleDown />}
                            type="p5"
                            color="gray"
                        />}
                        onClick={() => setShowWorkInProgress(true)} />
                </div>
                {/** Add stats activity here */}
            </div>
        </div>
    )
}
