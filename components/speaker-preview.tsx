"use client"

import { speakers } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const SpeakerPreview = () => {
  // Display only 3 speakers on the homepage
  const featuredSpeakers = speakers.slice(0, 3)

  return (
    <section id="speakers" className="container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">Meet Our Expert Speakers</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Learn from leading naturopathic doctors specializing in integrative oncology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredSpeakers.map((speaker, index) => (
          <motion.div
            key={speaker.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
              <div className="aspect-square overflow-hidden">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">{speaker.name}</h3>
                <p className="text-emerald-600 font-medium mb-2">{speaker.title}</p>
                <p className="text-gray-500 text-sm mb-3">{speaker.credentials}</p>
                <p className="text-gray-600 line-clamp-3">{speaker.bio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Button asChild size="lg" variant="outline">
          <Link href="/speakers">View All Speakers</Link>
        </Button>
      </motion.div>
    </section>
  )
}

export default SpeakerPreview
