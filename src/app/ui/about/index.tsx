"use client";

import { raleway_bold } from "@/fonts/fonts";
import s from "./index.module.css";
import { useState } from "react";

export const About = () => {
  return (
    <section className={s.main} id="about">
      <span className={s.titleBox}>
        <h1 className={raleway_bold.className}>
          ОБО
          <br />
          МНЕ
        </h1>
        <div className={s.circle} />
      </span>
      <p className="pb-4">
        <span className={`text-[#FF3333] ${raleway_bold.className}`}>
          <span className="text-4xl/[1rem]">М</span>еня{" "}
        </span>
        зовут Никита, и я являюсь фулстек-разработчиком.
      </p>
      <p className="pb-4">
        <span className={`text-[#FF3333] ${raleway_bold.className}`}>
          <span className="text-4xl/[1rem]">Н</span>едавно{" "}
        </span>
        я окончил курс веб-разработки от Яндекс Практикума. В настоящее время я
        продолжаю своё обучение в НГТУ на факультете бизнес-информатики.
      </p>
      <p className="pb-4">
        <span className={`text-[#FF3333] ${raleway_bold.className}`}>
          <span className="text-4xl/[1rem]">К</span>роме{" "}
        </span>
        того, я постоянно совершенствую свои профессиональные навыки, слежу за
        новыми тенденциями в мире разработки и участвую в различных проектах и
        мероприятиях, связанных с IT-индустрией.
      </p>
      <p className="pb-4">
        <span className={`text-[#FF3333] ${raleway_bold.className}`}>
          <span className="text-4xl/[1rem]">П</span>омимо{" "}
        </span>
        учёбы, я посещаю тренажёрный зал. Это помогает мне совершенствоваться не
        только умственно, но и физически.
      </p>
    </section>
  );
};
