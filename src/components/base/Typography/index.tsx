import { ReactNode } from "react";
import "../../../index.css";

export interface TypographyProps {
  text: string | ReactNode;
  type?: "title" | "subtitle" | "veryImportant" | "important" | "big" | "p0" | "p1" | "p2" | "p5" | "p3" | "p4";
  color?: "black" | "white" | "gray" | "blue" | "danger" | "button";
  family?: "system";
  styles?: string;
  onClick?: () => void;
}

export const Typography = ({
  text,
  type = "p1",
  color = "white",
  family = "system",
  styles = "",
  onClick
}: TypographyProps): JSX.Element => {

  const types: Record<string, string> = {
    title: `text-xl sm:text-4xl font-bold`,
    subtitle: `text-2xl sm:text-6xl font-medium`,
    veryImportant: `text-6xl sm:text-6xl font-bold`,
    important: `text-5xl sm:text-5xl font-bold`,
    big: `text-2xl sm:text-4xl font-bold`,
    p0: `text-xl sm:text-2xl font-normal`,
    p1: `text-lg sm:text-xl font-normal`,
    p2: `text-md sm:text-lg font-normal`,
    p3: `text-sm sm:text-[0.9rem] font-normal`,
    p4: `text-xs sm:text-md font-normal`,
    p5: `text-xs font-normal`,
  };

  const colors: Record<string, string> = {
    black: "text-black",
    white: "text-[#ffffff]",
    gray: "text-[#777E89]",
    searchFont: "text-[#C0C2C3]",
    blue: "text-[#2F81F7]",
    button: "text-[#C9D1D8]",
    danger: "text-[#d93636]"
  };

  const fontFamily: Record<string, string> = {
    system: "system"
  };

  const finalClassName = `${types[type]} ${colors[color]} ${fontFamily[family]} ${styles} transition duration-100`;

  switch (type) {
    case "p0":
    case "p1":
    case "p2":
    case "p3":
    case "p4":
    case "p5":
    case "important":
    case "veryImportant":
    case "big":
      return <p className={finalClassName} onClick={onClick}>{text}</p>;
    case "title":
      return <h1 className={finalClassName} onClick={onClick}>{text}</h1>;
    case "subtitle":
      return <h2 className={finalClassName} onClick={onClick}>{text}</h2>;
    default:
      throw new Error(`Invalid typography type: ${type}`);
  }
};