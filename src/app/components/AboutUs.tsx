import { EdgeComponent, EllipseComponent, Xmark } from "@/app/svgcomponents/svgComponents";
import Image from "next/image";
import TitleComponent from "@/app/components/TitleComponent";

export default function AboutUs() {
  return (
    <section
      id="aboutus"
      className="relative flex h-full w-full flex-col items-start justify-start px-4 md:px-10 pt-11"
    >
      <EdgeComponent className="absolute right-5 top-5" color={"#F2DF2C"} />
      <EdgeComponent
        className="absolute bottom-5 left-5 rotate-180"
        color={"#0055A4"}
      />
      <Xmark color="white" className="absolute left-14 top-1/2" />
      <Xmark color="white" className="absolute right-1/4 top-28 scale-125" />
      <Xmark color="white" className="absolute bottom-10 left-1/2 scale-125" />
      <EllipseComponent
        className="hidden md:block absolute bottom-32 right-32 scale-75"
        color="#F2DF2C"
      />
      <TitleComponent color="border-secondary" text="About Us" />
      <div className="mb-24 flex w-full flex-col items-center justify-between xl:justify-start md:flex-row">
        <div className="relative w-full lg:w-1/2 xl:w-1/3">
          <figure className='w-4/5 h-full lg:max-w-96 max-w-72 mx-auto md:mx-0 pb-10'>
            <Image
              className="h-full w-full rounded-lg"
              width={400}
              height={522}
              alt="test"
              src="/aboutimg.jpeg"
            />
          </figure>
          <EllipseComponent
            className="absolute lg:right-14 right-0 top-11 -z-10"
            color="white"
          />
        </div>
        <div className="text-md lg:text-2xl xl:text-3xl text-justify font-light text-white">
          <p className="my-auto max-w-[40rem] xl:max-w-[55rem]">
            At ArtistryLab, we are a passionate team of designers, developers
            and creative thinkers dedicated to transforming ideas into impactful
            digital experiences. With a focus on branding, web design and
            application development, we strive to push the boundaries of
            creativity and technology to deliver solutions that captivate,
            engage and empower businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
