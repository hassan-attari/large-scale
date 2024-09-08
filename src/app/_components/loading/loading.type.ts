import { ComponentsBase } from "../types/components-base.type";

export type LoadingProps = Omit<ComponentsBase , 'isDisabled'> & {
    type?: "spinner" | "ring";
}