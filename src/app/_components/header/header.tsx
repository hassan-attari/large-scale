import Image from "next/image";
import { TopNavigation } from "./top-navigation";

export const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex items-center justify-between">
        <Image
          src="./images/logo-light.svg"
          alt="کلاسبن"
          width={100}
          height={100}
        />
        <TopNavigation />
        <span className="mr-auto">user auth</span>
      </div>
    </header>
  );
};
