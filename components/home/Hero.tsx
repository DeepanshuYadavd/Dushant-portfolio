import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), {
  ssr: false,
});

const words = [
  "Hey! I'm Dushant Yadav",
  "Professional Video Editor",
  "Proficient in Premiere Pro ",
  "Crafting Cinematic Stories",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const [floatingWordsData, setFloatingWordsData] = useState<{ word: string, xOffset: number, yOffset: number, duration: number }[]>([]);

  useEffect(() => {
    if (!mounted) return;
    setFloatingWordsData(
      [
        "COLORIST",
        "STORYTELLER",
        "EDITOR",
        "CINEMATIC",
        "MOTION",
      ].map((word, i) => ({
        word,
        xOffset: Math.random() * 100 - 50,
        yOffset: Math.random() * 100 - 50,
        duration: 25 + i * 5,
      }))
    );
  }, [mounted]);

  return (
    <section className="relative flex justify-center  overflow-hidden">
      {mounted ? (
        <>
          {/* Background stays strictly within the Hero component */}
          <AnimatedBackground />

          {/* Movable/Floating background keywords - optimized for mobile */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none ">
            {floatingWordsData.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{
                  x: [0, item.xOffset],
                  y: [0, item.yOffset],
                  opacity: [0.01, 0.03, 0.01],
                }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute text-5xl md:text-[12rem] font-bold text-white tracking-tighter opacity-10"
                style={{
                  top: `${20 * i}%`,
                  left: `${15 * i}%`,
                  display: i > 2 ? "none" : "block",
                }}
              >
                {item.word}
              </motion.span>
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative  z-10 text-center px-6 !py-6  !flex !flex-col !item-center !justify-center  gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="mb-4 flex justify-center"
            >
              {/* !border !border-white/10  */}
              <span className="!px-5 !py-2 !rounded-full !bg-white/5  !text-[10px] md:!text-xs !tracking-[0.4em] !uppercase !text-neutral-400 !backdrop-blur-md">
                Based in India • Working Worldwide
              </span>
            </motion.div>

            <div className="flex flex-col items-center justify-around !px-[1rem] ">
              <div className=" !py-6 overflow-hidden md:w-[70%] px-2">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={index}
                    initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -60, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="!text-4xl sm:!text-5xl md:!text-9xl !font-bold !tracking-tight !leading-[1.1] md:!leading-[0.9] !uppercase w-full"
                  >
                    {words[index].split(" ").map((word, i) => (
                      <span
                        key={i}
                        className={
                          word.toLowerCase() === "yadav" ||
                            word.toLowerCase() === "dushant"
                            ? "!text-neutral-500"
                            : ""
                        }
                      >
                        {word}{" "}
                        {i === 1 && word.toLowerCase() === "yadav" ? (
                          <br className="hidden md:block" />
                        ) : (
                          ""
                        )}
                      </span>
                    ))}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <div className="">
                <motion.p
                  variants={itemVariants}
                  className="   !text-sm md:!text-xl !text-neutral-400 !max-w-xl !mx-auto !mb-8 md:!mb-12 !leading-relaxed px-4"
                >
                  An independent creative video editor focused on cutting edge
                  narratives and high-impact visual performance.
                </motion.p>
                <motion.div
                  variants={itemVariants}
                  className="!flex !flex-col sm:!flex-row !items-center !justify-center !gap-4 md:!gap-6"
                >
                  <Link href="/showreels">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="group !relative !px-8 md:!px-8 !py-2 md:!py-4 cursor-pointer !rounded-full !bg-white !text-black !font-bold !overflow-hidden !transition-shadow hover:!shadow-[0_0_40px_rgba(255,255,255,0.4)] !w-full sm:!w-auto !inline-flex !items-center !justify-center"
                    >
                      <div className="!relative !z-10 !flex !items-center !justify-center !gap-3">
                        <Play size={18} fill="black" />
                        <span className="!text-sm md:!text-base">
                          Watch Showreel
                        </span>
                      </div>
                      <div className="!absolute !bottom-0 !left-0 !w-full !h-0 !bg-neutral-200 !transition-all !duration-300 group-hover:!h-full" />
                    </motion.button>
                  </Link>

                  <Link href="/featured">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="!flex !items-center !justify-center !gap-2 !text-white hover:!text-neutral-500 !transition-colors !font-medium !text-sm md:!text-lg !py-3 cursor-pointer"
                    >
                      <span>Explore All Work</span>
                      <ArrowUpRight size={18} />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <div className="relative min-h-[80vh] bg-black" />
      )}
    </section>
  );
}
