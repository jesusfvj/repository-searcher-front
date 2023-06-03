import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../components/base/ButtonComponent";
import { useUI } from "../context/UI/UIContext";
import { useUser } from "../context/UserContext/UserContext";

export const LandingPage = () => {
  const [isTryingToLogIn, setIsTryingToLogIn] = useState<boolean>(false)
  const navigate = useNavigate()
  const { login } = useUser()
  const { setMessageSuccessToaster, setMessageErrorToaster } = useUI()
  const loginWithGitHub = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${clientId}`)
    setIsTryingToLogIn(true)
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    if (codeParam) {
      const loginUser = async () => {
        const response = await login(codeParam);
        if (response.ok) {
          setMessageSuccessToaster("Login with GitHub succesful.")
          navigate("/dashboard");
        }
      };
      loginUser();
    } else if (!codeParam && isTryingToLogIn){
      setMessageErrorToaster("There was an error trying to log in with GitHub. Please try again.")
    }
  }, [])


  return (
    <div className="w-full h-full bg-[#0D1117]">
      <ButtonComponent
        text="Login with GitHub"
        size="md"
        color="gray"
        onClick={loginWithGitHub} />
    </div>
  )
}
