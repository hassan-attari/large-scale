import { ComponentsBase } from "../types/components-base.type";

export type PriceProps = Omit<ComponentsBase, "isDisabled" | "variant"> & {
    price?: number;
    text?: string;
};
