import { useUI } from "../../../context/UI/UIContext"
import { Typography } from "../Typography"
import { MdTimelapse } from "react-icons/md";

export const WorkInProgress = () => {
  const {
    setShowWorkInProgress
  } = useUI()

  return (
    <>
      <div className="fixed top-0 bottom-0 w-screen bg-black opacity-90 z-[100]"
        onClick={() => setShowWorkInProgress(false)}></div>
      <div className="fixed top-[10vh] left-[25vw] w-[50vw] h-[80vh] flex flex-col justify-center items-center gap-5 rounded-lg border border-[#33363b] bg-black z-[100]">
          <Typography
            text={<MdTimelapse/>}
            type="p0"
            color="gray"
          />
        <Typography
          text="Functionality still under work"
          type="p0"
          color="gray"
        />
      </div>
    </>
  )
}
