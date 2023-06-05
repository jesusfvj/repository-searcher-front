import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DashBoardResponsive } from "../components/pages/Dashboard/DashBoardResponsive"
import { ProfileInformation } from "../components/pages/Dashboard/ProfileInformation"
import { RepositoryInformation } from "../components/pages/Dashboard/RepositoryInformation"
import { RepositoryTitles } from "../components/pages/Dashboard/RepositoryTitles"
import { useUI } from "../context/UI/UIContext"
import { useUser } from "../context/UserContext/UserContext"

export const UserPage = () => {
  const { userId } = useParams()
  const [render, setRender] = useState<boolean>(false)
  const { friendsArray, setFoundUser } = useUI()
  const { user } = useUser()

  useEffect(() => {
    const foundUserObject = friendsArray.find(obj => obj.id === userId);
    setFoundUser(foundUserObject)
    if (!foundUserObject) {
      window.location.href = import.meta.env.VITE_BASE_UR + "/dashboard";
    }
  }, []);

  useEffect(() => {
    setRender(!render)
  }, [user])

  useEffect(() => {
    const foundUserObject = friendsArray.find(obj => obj.id === userId);
    setFoundUser(foundUserObject)
  }, [userId])

  return (
    <>
      <div className="hidden md:flex md:flex-col w-full h-full">
        <div className="h-[4vh]">
        </div>
        <nav className="w-full h-[7vh] pb-2 flex justify-center items-center border-b-[0.1rem] border-[#1f2328]">
          <RepositoryTitles />
        </nav>
        <section className="flex gap-4 px-10 h-full border-b-[0.1rem] border-[#1f2328]">
          <ProfileInformation />
          <RepositoryInformation />
        </section>
      </div>
      {/**
        * Responsive Dashboard:
        */}
      <div className="md:hidden">
        <DashBoardResponsive />
      </div>
    </>
  )
}
