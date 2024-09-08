import { ButtonHTMLAttributes } from "react";
import { ComponentsBase } from "../types/components-base.type";
import { LoadingBehavior } from "../types/loading-behavior.type";


export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ComponentsBase & LoadingBehavior & {
    isOutline?: boolean;
    isLink?: boolean;
    animatedIcon?: boolean;
    shape?: ButtonShape;

}
 
export type ButtonShape = "default" | "wide" | "full" | "square";