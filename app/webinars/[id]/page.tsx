"use client";

import { use } from "react";
import { useState } from "react";
import { webinars, getSpeakerByWebinarId } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function WebinarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const webinar = webinars.find((w) => w.id === id);
  if (!webinar) notFound();

  const speaker = getSpeakerByWebinarId(webinar.id);
  const [tab, setTab] = useState<"webinar" | "speaker">("webinar");

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section
        style={{ backgroundColor: "rgba(144, 183, 62, 0.2)" }}
        className="py-16"
      >
        <div className="container">
          <Link
            href="/#webinars"
            className="inline-flex items-center text-[#0a3371] hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Webinars
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {webinar.title}
          </h1>
          <div className="flex flex-wrap gap-6 mb-6 text-black-900">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" /> {webinar.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" /> {webinar.time}
            </div>
          </div>
          <a href={webinar.registrationLink} target="_blank">
            <Button
              size="lg"
              style={{ backgroundColor: "#90b73e" }}
              className="bg-[#7d8d5b] hover:opacity-90 text-black"
            >
              Register Now
            </Button>
          </a>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="container border-b border-gray-200 mt-6">
        <div className="flex justify-start space-x-6">
          <button
            onClick={() => setTab("webinar")}
            className={`py-2 text-base font-medium border-b-2 ${
              tab === "webinar"
                ? "border-[#90b73e] text-[#0a3371]"
                : "border-transparent text-gray-500"
            }`}
          >
            About the Webinar
          </button>
          <button
            onClick={() => setTab("speaker")}
            className={`py-2 text-base font-medium border-b-2 ${
              tab === "speaker"
                ? "border-[#90b73e] text-[#0a3371]"
                : "border-transparent text-gray-500"
            }`}
          >
            About the Speaker
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <section className="container py-12">
        {tab === "webinar" && (
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {webinar.description}
            </p>

           {webinar.learningObjectives.length > 0 && (

              <>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Learning Objectives
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  {webinar.learningObjectives.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}

            {/* <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Registration Details
              </h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>
                  <strong>Cost:</strong>{" "}
                  <span className="text-[#90b73e] font-bold">
                    {webinar.details?.cost || "FREE"}
                  </span>
                </li>
                <li>
                  <strong>Who can attend:</strong>{" "}
                  {webinar.details?.audience || "Healthcare professionals"}
                </li>
                <li>
                  <strong>Format:</strong>{" "}
                  {webinar.details?.format || "Live webinar with Q&A"}
                </li>
              </ul>

              <a href={webinar.registrationLink} target="_blank">
                <Button
                  size="lg"
                  className="w-full bg-[#90b73e] hover:opacity-90 text-black"
                >
                  Register Free
                </Button>
              </a>
            </div> */}
          </div>
        )}

        {tab === "speaker" && speaker && (
          <section className="bg-white p-6 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Speaker Image */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-emerald-100 shadow-md">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Speaker Info */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                  {speaker.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-3">
                  {speaker.title}
                </p>
                <div
                  className="text-gray-700 leading-relaxed space-y-4 [&_a]:text-blue-600 [&_a]:underline [&_a:hover]:text-blue-800"
                  dangerouslySetInnerHTML={{ __html: speaker.biohtml }}
                />
              </div>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
