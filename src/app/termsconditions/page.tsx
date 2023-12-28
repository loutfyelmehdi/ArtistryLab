import { termsItems } from "@/app/utils";
import TitlePara from "@/app/components/TitlePgComponent";
import { IItem } from "@/app/types";
import PageDesign from "@/app/components/PageDesign";

export default function page() {
  return (
    <main className="relative h-full w-full overflow-clip">
      <PageDesign />
      <div className="relative mx-auto py-32 px-12 flex max-w-[1200px] flex-col items-center justify-center gap-y-16">
        <div className="text-center text-white ">
          <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
          <h3 className="text-lg font-normal">Effective Date: 16/10/2023</h3>
        </div>
        {termsItems.map((item: IItem, i) => (
          <TitlePara
            key={i}
            title={item.title}
            para={item.para}
            bulletPts={item.bulletPts}
          />
        ))}
      </div>
    </main>
  );
}
