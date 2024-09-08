import { SizeLimit } from "next";
import { Variant } from "./variant.type";
import { Size } from "./size.type";

export type ComponentsBase = {
    isDisabled?: boolean;
    className?: string;
    variant?: Variant;
    size?: Size;
}