"use client";
import s from "./index.module.css";
import { TLink } from "@/types/dataTypes";
import { NavigationButton } from "../nav_button";

interface IHeader {
  data: TLink[];
}

export const NavigationMenu = (props: IHeader) => {
  const { data } = props;

  return (
    <nav className={s.main}>
      {data.map((props: TLink, index) => {
        return <NavigationButton {...props} key={index} />;
      })}
    </nav>
  );
};
