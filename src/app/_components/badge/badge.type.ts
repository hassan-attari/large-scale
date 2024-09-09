import { ComponentsBase } from "../types/components-base.type";
import { ReactNode } from "react";
export type BadgeProps = Omit<ComponentsBase , 'isDisabled'> & {
    children: ReactNode;
}