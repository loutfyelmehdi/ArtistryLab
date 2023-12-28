import { IPosters } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";

export default function ProjectModal({
  isOpen,
  onClose,
  projectClicked,
}: {
  isOpen: boolean | null;
  onClose: () => void;
  projectClicked: IPosters;
}) {
  if (!isOpen) return null;
  return (
    <>
      <div
        onClick={onClose}
        className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black opacity-75"
      />

      <div
        className="fixed left-1/2 top-1/2 z-50 h-[90vh] w-full -translate-x-1/2
         -translate-y-1/2 overflow-hidden rounded-md
         bg-[#F3F3F3] text-[12px] font-semibold leading-tight text-black opacity-100 md:w-fit"
      >
        <Link
          href={projectClicked?.behance}
          target="_blank"
          className="absolute left-4 top-4 z-20 h-fit w-fit rounded-lg bg-white px-5 py-2.5 text-sm font-black shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          Go to Project
        </Link>
        <div className="relative h-1/2 w-full bg-black">
          <div className="bg-project-pattern absolute left-0 top-0 z-10 h-full w-full opacity-50" />
          <Image
            src={`${projectClicked?.path}`}
            fill
            className="pointer-events-none object-cover shadow-[0_8px_30px_rgb(0,0,0,0.05)]"
            alt="project image"
          />
          <div
            onClick={onClose}
            className="absolute right-5 top-5 z-50 cursor-pointer text-white"
          >
            <FaXmark className="h-8 w-8" />
          </div>
        </div>
        <div className="relative flex h-1/2 w-full flex-col items-center justify-between px-7 pt-14">
          <p className="text-[11px] font-semibold leading-loose text-black">
            {projectClicked?.description}
          </p>
          <div className="relative mb-8 h-6 w-6">
            <Image src={"/logoart.png"} alt="logo" fill />
          </div>
        </div>
      </div>
    </>
  );
}
