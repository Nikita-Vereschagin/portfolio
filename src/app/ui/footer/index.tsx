"use client";

import { raleway_bold } from "@/fonts/fonts";
import s from "./index.module.css";
import { TButton } from "@/types/dataTypes";
import { Button } from "../button";

export const Footer = (props: { data: TButton[] }) => {
  const { data } = props;
  return (
    <footer className={s.main}>
      <span className={s.titleBox}>
        <h2 className={raleway_bold.className}>Контакты</h2>
        <div className={s.line} />
      </span>
      <div className={s.content}>
        <p className={s.text}>
          По всем вопросам пишите на почту или в любую из предложенных соцсетей.
        </p>
        <div className={s.contactsBox}>
          {data.map((btn, i) => {
            return btn.children ? (
              <Button {...btn} key={i}>
                {btn.children}
              </Button>
            ) : (
              <Button {...btn} key={i} />
            );
          })}
        </div>
      </div>
    </footer>
  );
};
