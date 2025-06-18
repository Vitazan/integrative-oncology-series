

// export function generateStaticParams() {
//   return webinars.map((webinar) => ({
//     id: webinar.id,
//   }))
// }

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const webinar = webinars.find((w) => w.id === params.id)

//   if (!webinar) {
//     return {
//       title: "Webinar Not Found",
//     }
//   }

//   return {
//     title: `${webinar.title} | Integrative Oncology Webinar Series`,
//     description: webinar.shortDescription,
//   }
// }

// export default async function WebinarPage({ params }: { params: { id: string } }) {
//   const webinar = webinars.find((w) => w.id === params.id)

//   if (!webinar) {
//     notFound()
//   }

//   const speaker = getSpeakerByWebinarId(webinar.id)

//   return (
//     <main className="min-h-screen">
//       <section className="bg-emerald-50 py-16">
//         <div className="container">
//           <Link href="/#webinars" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Webinars
//           </Link>

//           <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{webinar.title}</h1>

//           <div className="flex flex-wrap gap-6 mb-8">
//             <div className="flex items-center text-emerald-700">
//               <Calendar className="h-5 w-5 mr-2" />
//               <span className="font-medium">{webinar.date}</span>
//             </div>
//             <div className="flex items-center text-emerald-700">
//               <Clock className="h-5 w-5 mr-2" />
//               <span>{webinar.time}</span>
//             </div>
//           </div>

//           <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
//             Register Now
//           </Button>
//         </div>
//       </section>

//       <section className="container py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-bold mb-6 text-gray-800">About This Webinar</h2>
//             <div className="prose max-w-none text-gray-600 mb-8">
//               <p className="mb-4">{webinar.description}</p>
//               <p className="mb-4">
//                 This webinar is designed for healthcare practitioners interested in integrative oncology, including
//                 naturopathic doctors, medical doctors, nurses, and other healthcare professionals. Patients and
//                 caregivers with a strong interest in the topic are also welcome to attend.
//               </p>
//               <p>
//                 Registration includes access to the live webinar, Q&A session with the speaker, downloadable resources,
//                 and a recording of the session available for 90 days.
//               </p>
//             </div>

//             <h2 className="text-2xl font-bold mb-6 text-gray-800">What You'll Learn</h2>
//             <ul className="space-y-4 mb-8">
//               <li className="flex">
//                 <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="20 6 9 17 4 12"></polyline>
//                   </svg>
//                 </div>
//                 <div className="text-gray-600">
//                   Evidence-based approaches to integrating complementary therapies with conventional cancer treatments
//                 </div>
//               </li>
//               <li className="flex">
//                 <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="20 6 9 17 4 12"></polyline>
//                   </svg>
//                 </div>
//                 <div className="text-gray-600">
//                   Clinical applications and practical implementation strategies for patient care
//                 </div>
//               </li>
//               <li className="flex">
//                 <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="20 6 9 17 4 12"></polyline>
//                   </svg>
//                 </div>
//                 <div className="text-gray-600">
//                   Latest research findings and their implications for clinical practice
//                 </div>
//               </li>
//               <li className="flex">
//                 <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="20 6 9 17 4 12"></polyline>
//                   </svg>
//                 </div>
//                 <div className="text-gray-600">Case studies illustrating successful integrative approaches</div>
//               </li>
//             </ul>

//             <div className="bg-gray-50 p-6 rounded-lg">
//               <h2 className="text-xl font-bold mb-4 text-gray-800">Registration Details</h2>
//               <ul className="space-y-3 text-gray-600 mb-6">
//                 <li className="flex items-start">
//                   <span className="font-medium mr-2">Cost:</span>{" "}
//                   <span className="text-emerald-600 font-bold">FREE</span> for all participants
//                 </li>
//                 <li className="flex items-start">
//                   <span className="font-medium mr-2">Who can attend:</span> Everyone interested in integrative oncology
//                 </li>
//                 <li className="flex items-start">
//                   <span className="font-medium mr-2">Format:</span> Live webinar with Q&A session
//                 </li>
//               </ul>
//               <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
//                 Register Free
//               </Button>
//             </div>
//           </div>

//           {speaker && (
//             <div>
//               <h2 className="text-2xl font-bold mb-6 text-gray-800">About the Speaker</h2>
//               <div className="bg-white rounded-xl overflow-hidden shadow-md mb-6">
//                 <img src={speaker.image || "/placeholder.svg"} alt={speaker.name} className="w-full h-auto" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-1 text-gray-800">
//                     {speaker.name}, {speaker.credentials}
//                   </h3>
//                   <p className="text-emerald-600 font-medium mb-4">{speaker.title}</p>
//                   <p className="text-gray-600 mb-4">{speaker.bio}</p>
//                   <p className="text-gray-600">
//                     <strong>Research Focus:</strong> {speaker.research}
//                   </p>
//                 </div>
//               </div>

//               <Button variant="outline" asChild className="w-full">
//                 <Link href={`/speakers#${speaker.id}`}>View Full Profile</Link>
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       <section className="bg-emerald-50 py-16">
//         <div className="container text-center">
//           <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
//             Join Our Integrative Oncology Webinar Series
//           </h2>
//           <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
//             Register now to secure your spot and gain valuable insights from leading experts in the field.
//           </p>
//           <div className="flex justify-center">
//             <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
//               Register Free
//             </Button>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
"use client"

import { webinars, getSpeakerByWebinarId } from "@/lib/data"
// import { getWebinars, getSpeakerByWebinarId } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useState } from "react"

// export default function WebinarPage({ params }: { params: { id: string } }) {
//   const webinar = webinars.find((w) => w.id === params.id)
//   if (!webinar) notFound()

//   const speaker = getSpeakerByWebinarId(webinar.id)
//   const [tab, setTab] = useState<"webinar" | "speaker">("webinar")

//   return (
import { use } from 'react'
export default function WebinarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const webinar = webinars.find((w) => w.id === id)

  if (!webinar) notFound()

  const speaker = getSpeakerByWebinarId(webinar.id)

  return (
    <main className="min-h-screen">
      {/* Top Section */}
      <section style={{ backgroundColor: "rgba(144, 183, 62, 0.2)" }} className="bg-emerald-550 py-16">
        <div className="container">
          <Link href="/#webinars" className="inline-flex items-center text-[#0a3371] hover:text-blue-800 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Webinars
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{webinar.title}</h1>
          <div className="flex flex-wrap gap-6 mb-6 text-black-900">
            <div className="flex items-center"><Calendar className="h-5 w-5 mr-2" /> {webinar.date}</div>
            <div className="flex items-center"><Clock className="h-5 w-5 mr-2" /> {webinar.time}</div>
          </div>
          <a href={webinar.registrationLink} target="_blank"><Button size="lg" style={{ backgroundColor: "#90b73e" }} className="bg-[#7d8d5b] hover:opacity-90 text-black">Register Now</Button></a>

        </div>
      </section>

      {/* Tabs Navigation */}
      {/* <div className="container border-b border-gray-200 mt-6">
        <div className="flex justify-start space-x-6">
          <button
            onClick={() => setTab("webinar")}
            className={`py-2 text-base font-medium border-b-2 ${
              tab === "webinar" ? "border-[#90b73e] text-[#0a3371]" : "border-transparent text-gray-500"
            }`}
          >
            About the Webinar
          </button>
          <button
            onClick={() => setTab("speaker")}
            className={`py-2 text-base font-medium border-b-2 ${
              tab === "speaker" ? "border-[#90b73e] text-[#0a3371]" : "border-transparent text-gray-500"
            }`}
          >
            About the Speaker
          </button>
        </div>
      </div> */}

      {/* Tab Content Section */}
      <section className="container py-12">
        {/* {tab === "webinar" && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">What You’ll Learn</h2>
            <ul className="space-y-4 text-gray-600 mb-8">
              <li>✔ Evidence-based integrative therapies</li>
              <li>✔ Clinical strategies for patient care</li>
              <li>✔ Latest research findings</li>
              <li>✔ Case studies and practical examples</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Registration Details</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li><strong>Cost:</strong> <span className="text-[#90b73e] font-bold">FREE</span></li>
                <li><strong>Who can attend:</strong> All interested in integrative oncology</li>
                <li><strong>Format:</strong> Live webinar with Q&A + 90-day access</li>
              </ul>
              <Button size="lg" className="w-full bg-[#90b73e] hover:opacity-90 text-black">Register Free</Button>
            </div>
          </div>
        )} */}

  <section className="bg-white p-6 rounded-xl shadow-md">
    {/* <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
      Meet the Speaker
    </h2> */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      {/* Speaker Image */}
      {speaker && (
        <>
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
  <p className="text-emerald-600 font-medium mb-3">{speaker.title}</p>
  
  <div
    className="text-gray-700 leading-relaxed space-y-4 [&_a]:text-blue-600 [&_a]:underline [&_a:hover]:text-blue-800"
    dangerouslySetInnerHTML={{ __html: speaker.biohtml }}
  />
</div>

        </>
      )}
    </div>
  </section>


      </section>
    </main>
  )
}
