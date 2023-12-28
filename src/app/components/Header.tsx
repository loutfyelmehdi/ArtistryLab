"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { burgerVariants, menuVariants } from "@/app/variants";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-50 flex max-h-24 items-center justify-between whitespace-nowrap bg-blackish px-6 py-6 shadow-md shadow-blackish">
      <div
        className={`fixed left-0  ${
          isOpen ? "block md:hidden" : "hidden"
        } top-0 z-auto flex h-screen w-screen items-center justify-center bg-black opacity-75`}
      />
      <Image src={"/logo.png"} height={82} width={180} alt="Logo" />
      <nav className="hidden md:block">
        <ul className="flex items-center justify-center gap-x-5 text-lg font-extrabold uppercase text-white transition-all lg:gap-x-16 lg:font-black">
          <li>
            <Link href="/#home">Home</Link>
          </li>
          <li>
            <Link href="/#aboutus">About Us</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-center gap-x-4">
        <Link
          href="#contact"
          className="hidden h-fit w-fit items-center justify-center rounded-lg bg-white px-4 py-2 md:flex"
        >
          <h1 className="text-lg font-black uppercase text-black">
            contact us
          </h1>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="z-20 flex flex-col items-center justify-center gap-y-2 md:hidden"
        >
          <motion.div
            variants={burgerVariants}
            animate={isOpen ? "topOpen" : ""}
            className="h-[3px] w-10 bg-white"
          />
          <motion.div
            variants={burgerVariants}
            animate={isOpen ? "middleOpen" : ""}
            className="h-[3px] w-10 bg-white"
          />
          <motion.div
            variants={burgerVariants}
            animate={isOpen ? "bottomOpen" : ""}
            className="h-[3px] w-10 bg-white"
          />
        </div>
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="absolute right-3 top-5 flex flex-col items-center justify-start gap-10 overflow-hidden whitespace-nowrap rounded-lg bg-primary p-4 text-center text-2xl font-black text-white md:hidden"
        >
          <div className="mt-10 flex flex-col gap-y-5 p-4">
            <h1>Home</h1>
            <h1>About Us</h1>
            <h1>Projects</h1>
          </div>
          <button className="flex h-fit w-fit items-center justify-center rounded-lg bg-white px-4 py-2">
            <h1 className="text-lg font-black uppercase text-black">
              contact us
            </h1>
          </button>
        </motion.div>
      </div>
    </header>
  );
}
