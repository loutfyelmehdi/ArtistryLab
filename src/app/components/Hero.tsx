import {
  EdgeComponent,
  EllipseComponent,
  Xmark,
} from "@/app/svgcomponents/svgComponents";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[calc(100vh-96px)] flex-col items-center justify-start md:flex-row md:justify-between"
    >
      <EllipseComponent
        className="absolute left-10 top-4 -z-10 md:left-28"
        color="#0055A4"
      />
      <EllipseComponent
        className="absolute left-16 top-9 -z-10 md:left-36"
        color="#F2DF2C"
      />
      <EdgeComponent
        className="absolute right-5 top-5 hidden sm:block"
        color="#0055A4"
      />
      <Xmark
        className="absolute left-[536px] top-20 hidden md:block"
        color="white"
      />
      <Xmark
        className="absolute right-60 top-1/2 hidden md:block"
        color="white"
      />

      <div className="flex  w-full flex-col items-center justify-start pt-14 text-center font-black leading-none text-white md:w-4/5 md:justify-center">
        <h1 className="mb-7 text-[70px]  uppercase md:text-[85px] lg:text-[100px] xl:text-[150px]">
          design
        </h1>
        <h2 className="mb-4 text-[18px] md:text-[26px] lg:text-[31px] xl:text-[46px]">
          Is the silent ambassador
        </h2>
        <h3 className="text-[22px] md:text-[30px] lg:text-[38px] xl:text-[53px]">
          of your brand&apos;s story.
        </h3>
        <a
          href="/contact"
          className="mt-10 h-12 w-72 rounded-lg bg-secondary px-6 py-2 text-2xl font-black text-primary lg:mt-20"
        >
          Start Your Project
        </a>
      </div>
      <figure className="bg-hero-pattern-nogradient mt-12 h-full w-full bg-cover md:mt-0 md:block md:w-2/5 md:bg-hero-pattern" />
    </section>
  );
}
