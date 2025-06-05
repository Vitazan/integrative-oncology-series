import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroBanner from "@/components/hero-banner"
import WebinarList from "@/components/webinar-list"
import FaqPreview from "@/components/faq-preview"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner />

      <section id="about" className="container  md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">About the Webinar Series</h2>

            <ul className="space-y-5 mb-8">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold">Advance your practice</span> with oncology-informed adjunctive care
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold">Gain the skills</span> to support cancer survivors effectively
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold">Implement leading-edge strategies</span> for cancer prevention
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold">Gain the knowledge to deliver </span> the most effective post-treatment strategies
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-emerald-100 text-emerald-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold">Learn directly</span> from experts in integrative oncology
                </p>
              </li>
            </ul>

            <p className="text-lg text-gray-600 mb-8">
              Join us for the highly anticipated <span style={{ color: "#0a3371" }} className="font-semibold">second edition</span>,
              featuring five renowned experts each delivering a powerful one-hour lecture. 
            </p>
            <p  className="text-lg text-gray-600 mb-8">
              <span style={{ color: "#0a3371" }} className="font-semibold"> Reserve your spot today</span>, save the date, and come ready with your questions—this is your chance to learn directly from leaders in the
              field. 
            </p>
          
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src="/herobanner.jpg"
              alt="Healthcare professionals discussing integrative oncology approaches"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      <WebinarList />

      <FaqPreview />
{/* 
      <section className="container ">
        <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800">
            Ready to Join Our Free Webinar Series?
          </h2>
          <p className="text-lg text-emerald-700 mb-8 max-w-3xl mx-auto">
            Register now to secure your spot in our upcoming integrative oncology webinars. Learn from expert
            naturopathic doctors and enhance your knowledge of complementary cancer care approaches - completely free of
            charge.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-lg">
            Register Free
          </Button>
        </div>
      </section> */}
    </main>
  )
}
