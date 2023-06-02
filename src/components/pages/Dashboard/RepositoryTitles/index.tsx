import { TfiBook } from "react-icons/tfi";
import { ButtonNav } from "../../../base/ButtonNav";
import { LuBookMarked } from "react-icons/lu";
import { BiCube } from "react-icons/bi";
import { AiOutlineStar, AiOutlineProject } from "react-icons/ai";
import { useUI } from "../../../../context/UI/UIContext";

export const RepositoryTitles = () => {
    const { setShowWorkInProgress } = useUI()

    return (
        <>
            <ButtonNav icon={<TfiBook />} text="Overview" onClick={() => setShowWorkInProgress(true)}/>
            <ButtonNav icon={<LuBookMarked />} text="Repositories"/>
            <ButtonNav icon={<AiOutlineProject />} text="Projects" onClick={() => setShowWorkInProgress(true)}/>
            <ButtonNav icon={<BiCube />} text="Packages" onClick={() => setShowWorkInProgress(true)}/>
            <ButtonNav icon={<AiOutlineStar />} text="Stars" onClick={() => setShowWorkInProgress(true)}/>
        </>
    )
}
