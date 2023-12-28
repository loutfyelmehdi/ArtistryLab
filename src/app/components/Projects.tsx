"use client";
import TitleComponent from "@/app/components/TitleComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useRef, useState } from "react";
import { posters } from "@/app/utils";
import { IPosters } from "@/app/types";
import ProjectModal from "@/app/components/ProjectModal";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState<boolean | null>(null);
  const [projectClicked, setProjectClicked] = useState<IPosters>(posters[0]);
  const swiperRef = useRef<any>(null);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ProjectModal
        isOpen={isModalOpen}
        projectClicked={projectClicked!}
        onClose={handleClose}
      />
      <section id="projects" className="h-full overflow-clip px-4 md:px-10">
        <TitleComponent color="border-primary" text="Projects" />
        <div className="flex items-center justify-between">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="relative  min-w-[calc(110vw)]"
            grabCursor
            slidesPerView={3}
            spaceBetween={20}
            modules={[Navigation]}
            loop
          >
            {posters.map((poster: IPosters, index) => (
              <SwiperSlide
                onClick={() => {
                  setIsModalOpen(true);
                  setProjectClicked(poster);
                }}
                key={index}
              >
                <Image
                  className={`overflow-hidden pointer-events-none rounded-lg`}
                  width={380}
                  height={545}
                  alt="test"
                  src={poster.path}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

//If you ever want to incoroprte the chevron buttons, use this code wrapping around the swiper component:

// <ChevronComponent onClick={() => swiperRef.current.slidePrev()}>
//    <Chevron />
// </ChevronComponent>

// <ChevronComponent onClick={() => swiperRef.current.slideNext()} rotation="rotate-180">
//    <Chevron />
// </ChevronComponent>
