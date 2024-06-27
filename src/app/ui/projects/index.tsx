"use client";

import { raleway_bold } from "@/fonts/fonts";
import s from "./index.module.css";
import { ProjectCard } from "../project_card";

export const Projects = () => {
  return (
    <section className={s.main}>
      <span className={s.titleBox}>
        <h2 className={raleway_bold.className}>Проекты</h2>
        <div className={s.circle} />
      </span>
      <div className={s.container}>
        <ProjectCard href="#" title="MyConspekt.ru" />
        <ProjectCard href="#" title="KnyaZz" />
        <ProjectCard href="#" title="Procharity" />
      </div>
    </section>
  );
};
