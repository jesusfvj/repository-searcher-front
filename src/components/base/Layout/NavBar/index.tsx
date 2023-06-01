import { Button } from "../../Button"
import { Search } from "../Search";
import { AiOutlineUser } from "react-icons/ai";
import { Typography } from "../../Typography";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/UserContext/UserContext";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const { user, logout } = useUser()
    const navigate = useNavigate();
    const handleLogInLogOut = () => {
        if (user) {
            logout()
        } else {
            navigate(`/loginregister`)
        }
    }

    return (
        <nav className="w-screen h-[20vh] flex justify-center bg-[length:100vw_30vh] bg-[url('https://res.cloudinary.com/diek1olu2/image/upload/v1684782686/ASSEME%20-%20visual/ASSEME_wave2_xyoxe6.png')] drop-shadow-lg z-10">
            <div className="flex justify-around items-center gap-10 w-screen h-[10vh] px-10">
                <Link to="/">
                    <Typography
                        text="ASSEME"
                        type="important"
                        color="yellow"
                    />
                </Link>
                <div className="w-[50%]">
                    <Search />
                </div>
                <div className="flex gap-5 w-[30%]">
                    <div className="w-full h-[5vh] flex">
                        <Button
                            size="xs"
                            text="Upload"
                            textWhite={true}
                            onClick={() => navigate(`/upload`)}
                        />
                    </div>
                    {user &&
                    <div className="w-full h-[5vh] flex">
                        <Button
                            size="xs"
                            text="Profile"
                            textWhite={true}
                            onClick={() => navigate(`/artist/${user._id}`)}
                        />
                    </div>}
                    <div className="w-full h-[5vh] flex justify-center items-center">
                        <div className="flex justify-center items-center h-full w-[20%] bg-gray-700">
                            <Typography
                                text={<AiOutlineUser />}
                                type="p1"
                                color="white"
                                styles="cursor-pointer"
                            /></div>
                        <div className="w-[80%] h-full">
                            <Button
                                size="xs"
                                color={`${user ? 'danger' : 'gray'}`}
                                text={`${user ? 'Log out' : 'Log in'}`}
                                textWhite={true}
                                onClick={handleLogInLogOut}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}
