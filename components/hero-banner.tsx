"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { getFeaturedSpeakers } from "@/lib/data";

const RotatingText = () => {
  const phrases = [
    "Free for healthcare practitioners",
    "Advanced webinar series with CE",
    "Clinically focused webinars in integrative oncology",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[3.5rem] md:h-[1.5rem] relative ">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          {phrases[currentIndex].split("\n").map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const HeroBanner = () => {
  const featuredSpeakers = getFeaturedSpeakers();

  return (
    <section className="relative bg-gradient-to-r from-emerald-50 to-gray-50 overflow-hidden">
      {/* The photo is ~2.7:1 with the subject on the right. On mobile it sits in
          a band across the top, anchored right so she stays in frame, and the
          copy stacks below it. From md up it goes back to a full-bleed
          background behind the copy. */}
      <div className="absolute top-0 left-0 right-0 h-56 sm:h-72 md:bottom-0 md:h-auto z-0">
        <Image
          src="/banner.webp"
          alt=""
          fill
          sizes="100vw"
          preload
          className="object-cover object-right md:object-center"
        />
      </div>

      {/* White scrim: heavy behind the copy on the left, clearing to the right
          so the photo keeps its full colour. Desktop only — on mobile no text
          overlaps the photo, so a wash there would just mute it. */}
      <div
        className="absolute inset-0 z-[1] hidden md:block"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.65) 40%, rgba(255,255,255,0.20) 58%, rgba(255,255,255,0.15) 72%, rgba(255,255,255,0.10) 86%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="container relative z-10 pt-64 pb-16 sm:pt-80 sm:pb-20 md:pt-32 md:pb-32">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* <span className="text-emerald-600">Free</span> Integrative Oncology{" "} */}
            {/* <span style={{ color: "#0a3371" }}>Free </span>  */}
            <span style={{ color: "#0a3371" }}>
              Integrative Oncology Series
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <RotatingText />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                style={{ backgroundColor: "#90b73e" }}
                className="hover:opacity-90 px-6 py-3 text-lg text-black"
              >
                <Link href="/#webinars">View Schedule</Link>
              </Button>
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="px-6 py-3 text-lg border border-emerald-600 text-emerald-600 bg-white hover:bg-emerald-50">
                <Link href="/schedule">View Schedule</Link>
              </Button>
            </motion.div> */}
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex justify-center sm:justify-start -space-x-4 mb-4 sm:mb-0">
              {featuredSpeakers.map((speaker, i) => (
                <motion.img
                  key={speaker.id}
                  src={speaker.image}
                  alt={speaker.name}
                  title={speaker.name}
                  style={{ objectPosition: speaker.imagePosition }}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (i + 1) * 0.1 }}
                />
              ))}
            </div>

            <p className="text-gray-800 font-medium text-sm sm:text-base">
              <span className="font-semibold block sm:inline">
                {featuredSpeakers.length} expert speakers from September 2026 –{" "}
                <br /> January 2027
              </span>
            </p>
          </motion.div>

          {/* <motion.div
  className="mt-4 ml-0 flex items-center gap-3 text-gray-800 text-base md:text-lg"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1 }}
>
  <span className="font-medium">Sponsored by</span>
  <a href="https://nfh.ca" target="_blank" rel="noopener noreferrer">
  <img src="/NFH x Vitazan.png" alt="NFH and Vitazan Logos" className="h-7 md:h-14 object-contain" />
</a>

</motion.div> */}
          <motion.div
            className="mt-4 ml-0 flex flex-col items-start gap-2 text-gray-800 text-base md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex items-center gap-3">
              <span className="font-medium">Sponsored by</span>
              <a
                href="https://nfh.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/NFH x Vitazan.png"
                  alt="NFH and Vitazan Logos"
                  className="h-7 md:h-14 object-contain"
                />
              </a>
            </div>

            <p className="text-sm md:text-base text-gray-600  max-w-xl leading-relaxed">
              A complete learning resource for all health providers focused on{" "}
              <br />
              prevention, treatment of side effects, and long-term health
              outcomes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
