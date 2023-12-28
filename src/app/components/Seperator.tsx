"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Seperator() {
  return (
    <section className="mb-12 h-full overflow-x-clip">
      <div className="relative z-10 flex h-20 w-[calc(100vw+10px)] origin-top-left rotate-3 gap-4 overflow-x-clip bg-secondary">
        {Array.from({ length: 2 }).map((_, index) => (
          <motion.div
            key={index}
            className="relative flex shrink-0 items-center justify-start gap-4"
            initial={{ x: "0%" }}
            animate={{ x: "calc(-100% - 16px)" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {Array.from({ length: 11 }).map((_, index) => (
              <Image
                key={index}
                width={120}
                height={100}
                src="/blackLogo.png"
                alt="logo"
              />
            ))}
          </motion.div>
        ))}
      </div>
      <div className="flex h-20 w-[calc(100vw+20px)] origin-top-left -translate-x-[10px] translate-y-5 -rotate-6 gap-4 overflow-hidden bg-primary">
        {Array.from({ length: 2 }).map((_, index) => (
          <motion.div
            key={index}
            className="relative flex shrink-0 items-center justify-start gap-4"
            initial={{ x: "-100%" }}
            animate={{ x: "calc(0% - 16px)" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {Array.from({ length: 11 }).map((_, index) => (
              <Image
                key={index}
                width={120}
                height={100}
                src="/whiteLogo.png"
                alt="logo"
              />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
