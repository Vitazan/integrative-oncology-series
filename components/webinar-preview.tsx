"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import { webinars, getSpeakerByWebinarId } from "@/lib/data"
import { motion } from "framer-motion"

const WebinarPreview = () => {
  // Only show 3 webinars in the preview
  const previewWebinars = webinars.slice(0, 3)

  return (
    <section id="webinars" className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Upcoming Webinars</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Join our expert speakers from June to October for insightful discussions on integrative oncology approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewWebinars.map((webinar, index) => {
            const speaker = getSpeakerByWebinarId(webinar.id)

            return (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="bg-emerald-50 pb-2">
                    <div className="flex items-center space-x-2 text-emerald-700 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{webinar.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-emerald-700">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{webinar.time}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow pt-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{webinar.title}</h3>
                    {/* <p className="text-gray-600 mb-4">{webinar.shortDescription}</p> */}
                    {speaker && (
                      <div className="flex items-center mt-4">
                        <img
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-800">{speaker.name}</p>
                          <p className="text-sm text-gray-600">{speaker.credentials}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between pt-4">
                    <Button variant="outline" asChild>
                      <Link href={`/webinars/${webinar.id}`} className="flex items-center">
                        Details <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button className="bg-[#90b73e]-100 hover:bg-emerald-700">Register</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/schedule">View All Webinars</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default WebinarPreview
