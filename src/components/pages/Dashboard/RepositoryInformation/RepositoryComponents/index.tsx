import { useUI } from "../../../../../context/UI/UIContext";
import { Typography } from "../../../../base/Typography"
import { BiGitRepoForked } from "react-icons/bi"
import { useEffect, useState } from "react";
import { ButtonComponent } from "../../../../base/ButtonComponent";
import { AiOutlineStar } from "react-icons/ai";
import { VscTriangleDown } from "react-icons/vsc";
import { Repository } from "../../../../../interface/repository";
import { getRelativeTime } from "../../../../../utils/timeToRelative";
import { useUser } from "../../../../../context/UserContext/UserContext";

interface RepositoryComponentsProps {
    repository: Repository
}

export const RepositoryComponents = ({ repository }: RepositoryComponentsProps): JSX.Element => {
    const { setShowWorkInProgress } = useUI()
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isHoveredStar, setIsHoveredStar] = useState<boolean>(false)
    const [lastUpdate, setLastUpdate] = useState<string>("")
    const { user } = useUser()

    const redirectToGitHub = () => {
        window.open(repository?.url, "_blank");
    }

    useEffect(() => {
        const relativeTime = getRelativeTime(repository?.updatedAt)
        setLastUpdate(relativeTime)
    }, [user])


    return (
        <div className="flex flex-col md:flex-row justify-between border-b-[0.1rem] border-[#1f2328] py-6">
            <div className="flex flex-col gap-1">
                <div className="flex flex-col md:flex-row gap-2 items-start md:items-center pb-2 md:pb-0">
                    <Typography
                        text={repository?.name}
                        type="p0"
                        color="blue"
                        styles="cursor-pointer hover:text-[#2F81F7] hover:underline"
                        onClick={redirectToGitHub}
                    />
                    <Typography
                        text={`${repository?.isPrivate ? 'Private' : 'Public'}`}
                        type="p4"
                        color={`${repository?.isPrivate ? 'danger' : 'gray'}`}
                        styles="border border-[#33363b] rounded-full px-2 h-6 pt-[0.15rem] w-fit"
                    />
                </div>
                <Typography
                    text={repository?.description}
                    type="p3"
                    color="gray"
                />
                {repository?.forkedFrom?.name &&
                    <div className="flex gap-1">
                        <Typography
                            text="Forked from"
                            type="p5"
                            color="gray"
                        />
                        <Typography
                            text={repository?.forkedFrom?.name}
                            type="p5"
                            color="gray"
                            styles="cursor-pointer hover:text-[#2F81F7]"
                            onClick={() => setShowWorkInProgress(true)}
                        />
                    </div>
                }
                <div className="flex flex-row justify-start items-center gap-4 mt-4">
                    {repository?.primaryLanguage !== null &&
                        <Typography
                            text={repository?.primaryLanguage?.name}
                            type="p5"
                            color="gray"
                        />
                    }
                    {repository?.forkCount !== 0 &&
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
                                text={repository?.forkCount}
                                type="p5"
                                color={`${isHovered ? 'blue' : 'gray'}`}
                            />
                        </div>
                    }
                    {repository?.stargazerCount !== 0 &&
                        <div className="flex gap-1 items-center cursor-pointer"
                            onMouseEnter={() => setIsHoveredStar(true)}
                            onMouseLeave={() => setIsHoveredStar(false)}
                            onClick={() => setShowWorkInProgress(true)}>
                            <Typography
                                text={<AiOutlineStar />}
                                type="p2"
                                color={`${isHoveredStar ? 'blue' : 'gray'}`}
                            />
                            <Typography
                                text={repository?.stargazerCount}
                                type="p5"
                                color={`${isHoveredStar ? 'blue' : 'gray'}`}
                            />
                        </div>
                    }
                    <div>
                        <Typography
                            text={lastUpdate}
                            type="p5"
                            color="gray"
                        />
                    </div>
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
