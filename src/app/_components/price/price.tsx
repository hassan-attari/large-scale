import { Badge } from "../badge";
import { IconToman } from "../icons/icons";
import { Size } from "../types/size.type";
import { PriceProps } from "./price.types";

const sizeClasses: Record<Size, { textSize: string; svgSize: number }> = {
  tiny: { textSize: "text-md", svgSize: 16 },
  small: { textSize: "text-xl", svgSize: 18 },
  normal: { textSize: "2xl", svgSize: 20 },
  large: { textSize: "3xl", svgSize: 22 },
};

export const Price: React.FC<PriceProps> = ({
  size = "normal",
  price,
  text = "رایگان",
  className,
}) => {
    const svgSize = sizeClasses[size].svgSize
  return (
    <>
      {price != null && price > 0 ? (
        <span
          className={`flex item-center font-bold gap-1 dark:text-white ${sizeClasses[size].textSize}${className}`}
        >
          {price.toLocaleString()}
          <IconToman strokeWidth={2} viewBox={"0 0 16 16"} white={svgSize} height={svgSize} />
        </span>
      ) : (
        <Badge variant="success" size="small">
          {text}
        </Badge>
      )}
    </>
  );
};
