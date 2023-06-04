
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../../context/UserContext/UserContext";
import { Typography } from "../../../Typography"

interface ProfileDropdownProps {
  setShowLogOut: (value: boolean) => void;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ setShowLogOut }) => {
  const navigate = useNavigate()
  const { user, logout } = useUser()

  const handleLogOut = () => {
    const response = logout()
    if(response){
      navigate('/')
    }
  }

  return (
    <>
      <div className="hidden md:flex fixed w-screen h-screen top-0 left-0"
        onClick={() => setShowLogOut(false)}></div>
      <div className="hidden md:flex absolute -bottom-16 right-9 flex-col w-[40vh] h-fit bg-[#161B22] border-[0.1rem] border-[#30363D] rounded-lg shadow-lg">
        <div className="flex justify-center items-center py-2 px-4 gap-2">
          <Typography
            text="Signed as"
            color="white"
            type="p3"
          />
          <Typography
            text={user?.userData?.login}
            color="blue"
            type="p3"
          />
        </div>
        <div className="flex justify-center items-center py-2 px-4 gap-2 border-t-[0.1rem] border-[#30363D] hover:bg-[#30363D] cursor-pointer"
        onClick={handleLogOut}>
          <Typography
            text="Log out"
            color="danger"
            type="p3"
          />
        </div>
      </div>
    </>
  )
}
