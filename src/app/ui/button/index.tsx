"use client";
import Link from "next/link";
import s from "./index.module.css";
import { TButton } from "@/types/dataTypes";
import Image from "next/image";

export const Button = (props: TButton) => {
  const { href, children, image } = props;

  if (children && image) {
    return (
      <Link href={href} className={`${s.main} ${s.mainTextAndImg}`}>
        <span className={s.imageBox}>
          <Image className={s.image} src={image} alt="=(" />
        </span>
        <p className={s.text}>{children}</p>
      </Link>
    );
  } else if (children) {
    return (
      <Link target="_blank" href={href} className={`${s.main} ${s.mainText}`}>
        <p>{children}</p>
      </Link>
    );
  } else {
    return "Error";
  }
};
