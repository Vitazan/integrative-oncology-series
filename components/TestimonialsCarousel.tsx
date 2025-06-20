"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    review:
      "This is an excellent series. I am so grateful for the information you are presenting. I appreciate the variety of topics and the expertise and experience of the presenters.",
  },
  {
    review:
      "Thanks for putting the series together, the pearls are helpful.",
  },
  {
    review:
      "It was amazing. The lecturers 100% the best. Love the research behind everything. I don't treat cancer patients, but many patients are being treated for cancer and it helps to know as much as I can about how to support generally. It is VERY helpful to have the supplement info afterward to make things easy on a busy doctor.",
  },
];

export default function TestimonialTextCarousel({
  language = "en",
}: {
  language?: "en" | "fr";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);

  const scroll = () => {
    const container = containerRef.current;
    if (!container) return;

    scrollPositionRef.current += 0.5;
    if (scrollPositionRef.current >= container.scrollWidth / 2) {
      scrollPositionRef.current = 0;
    }

    container.scrollLeft = scrollPositionRef.current;
    animationFrameRef.current = requestAnimationFrame(scroll);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    animationFrameRef.current = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const handleMouseLeave = () => {
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(scroll);
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const currentTestimonials = testimonials;

  return (
    <section className="w-full bg-gray-100 py-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        {language === "fr"
          ? "Ce que disent les participants précédents"
          : "What past attendees are saying"}
      </h2>
      <div
        ref={containerRef}
        className="flex overflow-hidden cursor-pointer"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="flex">
          {[...currentTestimonials, ...currentTestimonials].map(
            (testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[100vw] md:w-[550px] mx-4 bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <p className="text-gray-700 text-lg italic">
                    “{testimonial.review}”
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
