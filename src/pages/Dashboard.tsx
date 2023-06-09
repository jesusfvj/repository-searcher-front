import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DashBoardResponsive } from "../components/pages/Dashboard/DashBoardResponsive"
import { ProfileInformation } from "../components/pages/Dashboard/ProfileInformation"
import { RepositoryInformation } from "../components/pages/Dashboard/RepositoryInformation"
import { RepositoryTitles } from "../components/pages/Dashboard/RepositoryTitles"
import { useUI } from "../context/UI/UIContext"
import { useUser } from "../context/UserContext/UserContext"
import { checkTokenExpired } from "../utils/tokenExpiredValidator"

export const Dashboard = () => {
  const navigate = useNavigate()
  const [render, setRender] = useState<boolean>(false)
  const { setMessageErrorToaster, setIsExpired, setIsLoading } = useUI()
  const { user, getUserDataContext, logout } = useUser()
  const [loadingTimeout, setLoadingTimeout] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (!user?.userData) {
      const getUserData = async () => {
        setIsLoading(true)
        setLoadingTimeout(setTimeout(handleTimeout, 60000));
        const response = await getUserDataContext();
        clearTimeout(loadingTimeout);
        setIsLoading(false)
        if (!response.ok) {
          const isExpired = checkTokenExpired(response.data)
          if (isExpired) {
            setIsExpired(true)
            navigate("/")
          } else if (response.data === "no user") {
            logout()
            navigate("/")
          }
          setMessageErrorToaster("There was a problem retrieving your user.")
        }
      };
      getUserData();
    }
  }, [])

  const handleTimeout = () => {
    logout()
  };

  useEffect(() => {
    setRender(!render)
  }, [user])

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
