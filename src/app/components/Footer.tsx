'use client'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
  EdgeComponent,
  EllipseComponent,
  Xmark,
} from "@/app/svgcomponents/svgComponents";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const formRef = useRef<HTMLFormElement>(null!);
  const Year = new Date().getFullYear();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(serviceID!, templateID!, formRef.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <footer
      id="contact"
      className="relative flex h-screen w-full flex-col items-start justify-end overflow-clip"
    >
      <EdgeComponent
        className="absolute bottom-5 left-5 hidden rotate-180 md:block"
        color={"#F2DF2C"}
      />
      <EdgeComponent className="absolute right-5 top-5" color={"#0055A4"} />
      <EllipseComponent
        color="#F2DF2C"
        className="absolute right-[40%] top-1/3 -z-10 scale-[4]"
        width={"1"}
      />
      <Xmark
        color="#FFFFFF"
        className="absolute right-[45%] top-[15%] scale-[4]"
      />
      <div className="flex h-[500px] w-full items-center justify-center rounded-t-[60px] bg-primary transition-all md:rounded-t-[100px]">
        <div className="flex w-full flex-col items-center justify-center md:h-full md:justify-between md:pb-4 md:pt-12">
          <div className="flex w-full flex-col items-center justify-center gap-y-4 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col items-center justify-center md:items-start md:pl-11">
              <div className="text-md relative my-4 flex h-12 w-fit min-w-32 items-center justify-center rounded-xl border-2 border-secondary p-2 font-bold text-white md:text-xl">
                Subscribe to our Newsletter!
              </div>
              <form
                onSubmit={sendEmail}
                ref={formRef}
                className="flex flex-col gap-2 md:flex-row"
              >
                <input
                  placeholder="email@mail.com"
                  className="rounded-xl bg-white p-4 text-lg font-black tracking-widest text-black text-opacity-40 md:w-[317px]"
                  type="email"
                />
                <button className="text-md rounded-xl bg-neutral-200 px-4 py-2 font-extrabold uppercase text-black transition duration-200 hover:bg-white">
                  Submit
                </button>
              </form>
              <p className="hidden max-w-[470px] p-11 pl-0 text-lg font-medium text-neutral-200 md:block">
                Stay in the loop with our latest updates, exclusive offers, and
                insider insights. Subscribe to our newsletter and join our
                community of informed enthusiasts.
              </p>
            </div>
            <div className="flex h-full flex-col items-center justify-center gap-2.5 md:pr-11 ">
              <Image
                className="h-24 w-24 transform rounded-full transition duration-200 hover:scale-110 lg:h-auto lg:w-auto"
                src={"/logocircle.jpeg"}
                width={136}
                height={131}
                alt="footer logo"
              />
              <h1 className="text-center text-lg font-black text-white">
                Follow Us <br /> On Social Media
              </h1>
              <div className="flex gap-4 text-white">
                <a
                  className="cursor-pointer"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61552800787226"
                >
                  <FaFacebook className="h-8 w-8 transition-colors duration-200 hover:text-secondary" />
                </a>
                <a
                  className="cursor-pointer"
                  target="_blank"
                  href="https://www.instagram.com/artistrylabbts/"
                >
                  <FaInstagram className="h-8 w-8 transition-colors duration-200 hover:text-secondary" />
                </a>
                <a
                  className="cursor-pointer"
                  target="_blank"
                  href="https://twitter.com/ArtistryLab__"
                >
                  <FaXTwitter className="h-8 w-8 transition-colors duration-200 hover:text-secondary" />
                </a>
              </div>
            </div>
          </div>
          <ul className="mt-5 flex flex-col items-center justify-center whitespace-nowrap text-sm text-white md:flex-row md:gap-4">
            <div className="md:gap-non flex items-center justify-center gap-4">
              <a
                href={"/termsconditions"}
                className="transition-all duration-200 hover:font-bold"
              >
                Terms & Conditions{" "}
              </a>
              <div className="text-xl font-bold">-</div>
              <a
                href={"/privacypolicy"}
                className="transition-all duration-200 hover:font-bold"
              >
                Privacy Policy
              </a>
            </div>
            <div className="hidden text-xl font-bold md:block">-</div>
            <li>All Rights Reserved {Year} &copy;</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
