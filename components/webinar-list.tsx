"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { webinars, getSpeakersByWebinarId } from "@/lib/data";
import { motion } from "framer-motion";

const WebinarList = () => {
  return (
    <section id="webinars" className="bg-gray py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">
            Schedule
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Join our expert naturopathic doctors from September 2026 to January
            2027 for insightful discussions on integrative oncology approaches.
            All webinars are free and open to integrative healthcare
            practitioners and students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {webinars.map((webinar, index) => {
            const webinarSpeakers = getSpeakersByWebinarId(webinar.id);
            const speaker = webinarSpeakers[0];

            return (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                    {/* Speaker Image Column */}
                    {webinarSpeakers.length > 0 && (
                      <div
                        style={{ backgroundColor: "rgba(144, 183, 62, 0.2)" }} // 80% opacity
                        className="md:col-span-1 bg-emerald-50 flex flex-wrap items-center justify-center gap-2 p-4"
                      >
                        {webinarSpeakers.map((s) => (
                          <Link
                            key={s.id}
                            href={`/webinars/${webinar.id}`}
                            title={s.name}
                            className={`relative block aspect-square overflow-hidden rounded-full border-4 border-white shadow-md ${
                              webinarSpeakers.length > 1
                                ? "w-[45%] max-w-[110px]"
                                : "w-full max-w-[180px]"
                            }`}
                          >
                            <img
                              src={s.image || "/placeholder.svg"}
                              alt={s.name}
                              style={{ objectPosition: s.imagePosition }}
                              className="w-full h-full object-cover"
                            />
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Webinar Content Column */}
                    <div className="md:col-span-2 flex flex-col h-full">
                      <CardHeader className="pb-2">
                        <div className="flex flex-wrap gap-4 text-black mb-2">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {webinar.date}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{webinar.time}</span>
                          </div>
                          <span
                            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                              webinar.ceAccredited
                                ? "bg-[#90b73e]/20 text-[#3f5417]"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {webinar.ceAccredited ? "CE accredited" : "Non-CE"}
                          </span>
                        </div>
                      </CardHeader>

                      <CardContent className="flex flex-col gap-4 p-4   rounded-2xl   transition-shadow duration-200">
                        <Link
                          href={`/webinars/${webinar.id}`}
                          className="group"
                        >
                          <h3 className="text-xl font-semibold text-[#0a3371] group-hover:text-gray-900 transition-colors duration-200">
                            {webinar.title}
                          </h3>
                        </Link>

                        {speaker && (
                          <div className="bg-gray-50 rounded-xl p-4  ">
                            <Link
                              href={`/webinars/${webinar.id}`}
                              className="group"
                            >
                              <h4 className="text-base font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-200">
                                {webinarSpeakers
                                  .map((s) => `${s.name}, ${s.credentials}`)
                                  .join("  &  ")}
                              </h4>
                            </Link>

                            {/* <p className="text-sm text-gray-500 mt-1">
                              {speaker.title}
                            </p> */}

                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                              {speaker.bio}
                            </p>
                          </div>
                        )}
                      </CardContent>

                      <CardFooter className="flex justify-between pt-4">
                        <Button variant="outline" asChild>
                          <Link
                            href={`/webinars/${webinar.id}`}
                            className="flex items-center"
                          >
                            Details <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>

                        {webinar.registrationLink ? (
                          <Button
                            asChild
                            style={{
                              backgroundColor: "rgba(144, 183, 62, 0.8)",
                            }}
                            className="hover:text-gray-50 text-black"
                          >
                            <a
                              href={webinar.registrationLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Register Now
                            </a>
                          </Button>
                        ) : (
                          <Button
                            disabled
                            variant="outline"
                            className="text-gray-500"
                          >
                            Registration opening soon
                          </Button>
                        )}
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WebinarList;
