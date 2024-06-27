import { useSpring } from "@react-spring/web";
import { CSSProperties, useCallback, useState } from "react";

export const useBoop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  springConfig = {},
}): { style: CSSProperties; trigger: () => void } => {
  const [isBooped, setIsBooped] = useState<boolean | null>(null);
  const style = useSpring<CSSProperties>({
    from: {
      transform: `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    },
    to: {
      transform: `translate(${x}px, ${y}px)
       rotate(${rotation}deg)
       scale(${scale})`,
    },
    reverse: isBooped === null ? undefined : !isBooped,
    reset: true,
    config: springConfig,
  });

  const trigger = useCallback(() => {
    isBooped === null ? setIsBooped(true) : setIsBooped(!isBooped);
  }, [isBooped]);

  return { style, trigger };
};
