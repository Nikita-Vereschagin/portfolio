"use client";

import { raleway_bold } from "@/fonts/fonts";
import s from "./index.module.css";
import { TCard } from "@/types/dataTypes";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = (props: TCard) => {
  const { title, images = [], href } = props;

  while (images?.length < 3) {
    images?.push("");
  }

  return (
    <Link href={href} className={s.main}>
      <p className={s.title}>{title}</p>
      <div className={s.imageBox}>
        {images.map((image, i) => {
          return image === "" ? (
            <div className={s.emptyBlock} key={i} />
          ) : (
            <Image className={s.image} src={image} alt="" key={i} />
          );
        })}
      </div>
    </Link>
  );
};
