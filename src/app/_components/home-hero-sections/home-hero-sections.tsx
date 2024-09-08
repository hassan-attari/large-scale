import Image from "next/image";
import { Button } from "../button";

export const HomeHeroSection: React.FC = () => {
  return (
    <>
      <section className="bg-hero-pattern mt-5 xl:mt-20 bg-center bg-no-repeat">
        <div className="container flex flex-col-reverse items-center xl:flex-row">
          <div className="flex flex-col gap-5 text-center mt-5 pb-5 xl:text-right">
            <h3 className="text-xl dark:text-info xl:text-2xl">
              خوش اومدی به ...
            </h3>
            <h1 className="text-3xl lg:text-3xl xl:text-5xl font-black gradient">
              مسیر صعود به قله‌های برنامه‌نویسی
            </h1>
            <p className="">
              هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
              کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
              هواتو داریم.
            </p>
            <div className="flex gap-4 mt-5">
              <Button variant="primary" size="large">
                دوره‌های ری‌اکت و نکست
              </Button>
              <Button variant="neutral" size="large">
                مشاوره برنامه نویسی
              </Button>
            </div>
            <Image
              src="/images/frameworks.png"
              alt=""
              width={412}
              height={39}
              className="grayscale mt-4 opacity-70 m-auto xl:m-0"
            />
          </div>
          <Image
            src="/images/programmer-landing.svg"
            alt="کلاسبن"
            width={702}
            height={521}
          />
        </div>
      </section>
      <div className="container"></div>
    </>
  );
};
