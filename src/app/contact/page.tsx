import { contactItems } from "@/app/utils";
import { IItem } from "@/app/types";
import PageDesign from "@/app/components/PageDesign";
import TitleParaBox from "../components/TitlePgBoxComponent";

export default function page() {
  function chunkArray(array:Array<any>, chunkSize:number) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}
const chunks = chunkArray(contactItems, 3);
  return (
    <main className="relative h-full w-full overflow-clip">
      <PageDesign />
      <div className="relative z-auto mx-auto flex max-w-[1200px] flex-col gap-y-16 px-12 py-32">
        <div className="text-center text-white ">
          <h3 className="text-start text-lg font-normal">
            Get a glimpse at what we do to get your business on track for
            success.
          </h3>
        </div>
        <div>
          {chunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex}>
              {chunk.length < 3
                ? <div className="grid md:grid-cols-2 gap-x-12 md:px-14">
                {chunk.map((item, itemIndex) => (
                  <TitleParaBox
                    key={itemIndex}
                    title={item.title}
                    para={item.para}
                    bulletPts={item.bulletPts}
                  />
                ))}
                </div>
                : 
                <div className="grid md:grid-cols-3 gap-x-12 md:mb-12">
                  {chunk.map((item, itemIndex) => (
                    <TitleParaBox
                      key={itemIndex}
                      title={item.title}
                      para={item.para}
                      bulletPts={item.bulletPts}
                    />
                  ))}
                  </div>
                }
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
