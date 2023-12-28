import { EdgeComponent, EllipseComponent, Xmark } from "@/app/svgcomponents/svgComponents";

export default function PageDesign() {
  return (
    <>
      <EdgeComponent
        color="#0055A4"
        className="absolute left-10 top-6 -rotate-90"
      />
      <EllipseComponent color="#0055A4" className="absolute right-20 top-10 " />
      <EllipseComponent color="#F2DF2C" className="absolute right-11 top-14 " />
      <EllipseComponent
        color="#FFFFFF"
        className="absolute left-0 top-[28rem] -translate-x-1/2 "
      />
      <EllipseComponent
        color="#FFFFFF"
        className="absolute right-0 top-[40rem] translate-x-1/3 "
      />
      <EllipseComponent
        color="#F2DF2C"
        className="absolute left-0 top-[75rem] "
      />
      <EllipseComponent
        color="#F2DF2C"
        className="absolute right-0 top-[90rem] translate-x-2.5"
      />
      <Xmark
        color="#FFFFFF"
        className="absolute right-11 top-[20rem] h-5 w-5"
      />
      <Xmark color="#FFFFFF" className="absolute left-11 top-[45rem] h-5 w-5" />
      <Xmark
        color="#FFFFFF"
        className="absolute right-14 top-[55rem] h-10 w-10"
      />
      <Xmark
        color="#FFFFFF"
        className="absolute left-0.5 top-[100rem] h-10 w-10"
      />
      <Xmark
        color="#FFFFFF"
        className="absolute -left-8 top-[130rem] h-24 w-24"
      />
    </>
  );
}