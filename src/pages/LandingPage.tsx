import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../components/base/ButtonComponent";
import { Typography } from "../components/base/Typography";
import { useUI } from "../context/UI/UIContext";
import { useUser } from "../context/UserContext/UserContext";

export const LandingPage = () => {
  const [isTryingToLogIn, setIsTryingToLogIn] = useState<boolean>(false)
  const navigate = useNavigate()
  const { login } = useUser()
  const { setMessageSuccessToaster, setMessageErrorToaster, isExpired, setIsExpired, setIsLoading } = useUI()
  const loginWithGitHub = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${clientId}`)
    setIsTryingToLogIn(true)
  }

  const redirectToGitHub = () => {
    window.open("https://github.com/", "_blank");
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    if (codeParam) {
      const loginUser = async () => {
        setIsLoading(true)
        const response = await login(codeParam);
        setIsLoading(false)
        if (response.ok) {
          setMessageSuccessToaster("Login with GitHub succesful.")
          setIsExpired(false)
          navigate("/dashboard");
        } else {
          setMessageErrorToaster("Something happened. Please try again.")
        }
      };
      loginUser();
    } else if (!codeParam && isTryingToLogIn) {
      setMessageErrorToaster("There was an error trying to log in with GitHub. Please try again.")
    }
  }, [])


  return (
    <div className="w-screen h-screen bg-[#0D1117] flex justify-center items-center">
      <div className="flex flex-col justify-around items-center w-[90vw] md:w-[40vw] h-[80vh] border border-[#414953] px-4 md:px-10 py-4 rounded-lg">
        <Typography
          text="GitHub Repo Searcher"
          type="big"
          color="blue"
          styles="text-center"
        />
        <Typography
          text="Please, log in with your GitHub account to be granted access."
          type="p0"
          color="white"
          styles="text-center"
        />
        <img
          src="https://res.cloudinary.com/diek1olu2/image/upload/v1685732941/samples/github.e4cf49de_gw95ss.png"
          alt="GitHub logo"
          className="w-[30vw] h-[30vw] md:w-[10vw] md:h-[10vw]"
        />
        <div className="flex flex-col justify-center items-center">
          <Typography
            text="You need to have a running account in GitHub."
            type="p3"
            color="gray"
            styles="text-center"
          />
          <div className="flex flex-col md:flex-row justify-center items-center gap-1">
            <Typography
              text="If you don't, please click"
              type="p3"
              color="gray"
              styles="text-center"
            />
            <Typography
              text="here"
              type="p3"
              color="blue"
              styles="cursor-pointer hover:underline text-center"
              onClick={redirectToGitHub}
            />
            <Typography
              text="to create one."
              type="p3"
              color="gray"
              styles="text-center"
            />
          </div>
        </div>
        {isExpired &&
          <Typography
            text="Session has expired. Please log in again."
            type="p3"
            color="danger"
            styles="text-center"
          />
        }
        <div className="w-full h-16">
          <ButtonComponent
            text="Login with GitHub"
            size="md"
            color="new"
            onClick={loginWithGitHub} />
        </div>
      </div>
    </div>
  )
}
