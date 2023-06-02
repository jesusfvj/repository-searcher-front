import { BsGithub } from "react-icons/bs";
import { Typography } from "../Typography";

interface LogoProps {
	type?: "title" | "subtitle" | "important" | "big" | "p0" | "p1" | "p2" ;
	color?: "black" | "white" | "yellow" | "lightGreen" | "gray" | "darkGreen" | "ligthBlue" | "blue" | "transparent" | "danger";
	family?: "one";
	styles?: string;
}

export const Logo = ({type = "p0", color = "white"}:LogoProps): JSX.Element  => {
    return (
        <Typography
            text={<BsGithub className="hover:text-[#777E89] cursor-pointer"/>}
            type="big"
            color="white"
        />
    )
}
