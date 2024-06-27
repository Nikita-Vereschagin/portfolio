"use client";
import { Button } from "../button";
import s from "./index.module.css";
import arrow from "../../../../public/arrow.svg";
import fullstackDev from "../../../../public/fullstack_developer.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={s.main}>
      <Image src={fullstackDev} alt="Fullstack developer" />
      <p className={s.text}>
        Обеспечу разработку веб-проектов, от внешнего интерфейса до серверной
        части.
      </p>
      <Button href="#contacts" image={arrow}>
        Перейти к контактам
      </Button>
    </header>
  );
};
