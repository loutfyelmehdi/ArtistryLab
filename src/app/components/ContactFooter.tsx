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

export default function ContactFooter() {
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
        <div className="relative flex w-full flex-col items-center justify-center md:h-full md:justify-between md:pb-4 md:pt-12">
          <div className="absolute -top-20 md:-top-8 inline-flex items-center justify-center gap-[10px] rounded-[12px] bg-white p-[10px]">
            <div className="relative mt-[-1.00px] w-fit text-2xl md:text-[36px] font-black leading-[normal] tracking-[0] text-black">
              CONTACT US
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-y-4">
            <div className="flex flex-col items-center justify-center md:items-start md:pl-11">
              <form
                onSubmit={sendEmail}
                ref={formRef}
                className="flex flex-col gap-2 md:mt-6 px-10"
              >
                <div className="w-full">
                  <textarea
                    placeholder="Your Text Here"
                    className="w-full rounded-3xl bg-white p-4 text-lg font-black tracking-widest text-black text-opacity-40 h-40 md:h-72"
                  />
                </div>
                <div className="grid md:grid-cols-5 gap-x-4 gap-0 gap-y-4 md:gap-y-0">
                  <input
                    placeholder="Your Name"
                    className="col-span-2 rounded-xl bg-white p-4 text-lg font-black tracking-widest text-black text-opacity-40 md:w-[317px]"
                    type="text"
                  />
                  <input
                    placeholder="email@mail.com"
                    className="col-span-2 rounded-xl bg-white p-4 text-lg font-black tracking-widest text-black text-opacity-40 md:w-[317px]"
                    type="email"
                  />
                  <button className="col-span-2 md:col-span-1 text-md rounded-xl bg-neutral-200 px-4 py-2 font-extrabold uppercase text-black transition duration-200 hover:bg-white w-full">
                    Submit
                  </button>
                </div>
              </form>
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
