import { SpringValue } from "@react-spring/web";

export interface IUseBoop {
  style: {
    display: SpringValue<string>;
    transform: SpringValue<string>;
    backfaceVisibility: SpringValue<string>;
  };
  trigger: () => void;
}
