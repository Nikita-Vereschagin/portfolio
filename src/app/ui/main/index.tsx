"use client";

import { About } from "../about";
import { Projects } from "../projects";
import s from "./index.module.css";

export const Main = () => {
  return (
    <main className={s.main}>
      <About />
      <Projects />
    </main>
  );
};
