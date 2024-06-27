"use client";
import Link from "next/link";
import s from "./index.module.css";
import { animated, config, useSpring } from "@react-spring/web";
import { CSSProperties, useState } from "react";
import { raleway_bold } from "@/fonts/fonts";
import { TLink } from "@/types/dataTypes";

export const NavigationButton = (props: TLink) => {
  const { href, text } = props;

  const [isHover, setIsHover] = useState<boolean | undefined>(false);
  const style = useSpring<CSSProperties>({
    from: {
      transform: `scale(0)`,
    },
    to: {
      transform: `scale(1)`,
    },
    reverse: isHover,
    reset: true,
    config: config.stiff,
  });

  return (
    <Link
      href={href}
      className={`${raleway_bold.className} ${s.link}`}
      onMouseOver={() => setIsHover(undefined)}
      onMouseLeave={() => setIsHover(true)}
    >
      <animated.div style={style} className={s.hoverCircle} />
      {text}
    </Link>
  );
};
