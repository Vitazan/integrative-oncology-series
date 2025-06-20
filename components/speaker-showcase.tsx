import { speakers, getWebinarBySpeakerId } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

const SpeakerShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {speakers.map((speaker) => {
        const webinar = getWebinarBySpeakerId(speaker.id)

        return (
          <Card key={speaker.id} className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={speaker.image || "/placeholder.svg"}
                alt={speaker.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                <p className="text-emerald-200 text-sm">{speaker.credentials}</p>
              </div>
            </div>

            <CardContent className="pt-6">
              <p className="text-emerald-600 font-medium mb-2">{speaker.title}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{speaker.bio}</p>
              <p className="text-xs text-gray-500 mb-4">
                <span className="font-semibold">Research Focus:</span> {speaker.research}
              </p>

              {webinar && (
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <h4 className="font-bold text-gray-800 text-sm mb-2">Upcoming Webinar</h4>
                  <p className="text-emerald-700 font-medium mb-2">{webinar.title}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{webinar.time}</span>
                    </div>
                  </div>
                  <Button asChild size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Link href={`/webinars/${webinar.id}`}>View Details</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default SpeakerShowcase
