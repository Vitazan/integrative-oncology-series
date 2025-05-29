import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import { webinars, getSpeakerByWebinarId } from "@/lib/data"

const WebinarSchedule = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {webinars.map((webinar) => {
        const speaker = getSpeakerByWebinarId(webinar.id)

        return (
          <Card
            key={webinar.id}
            className="flex flex-col h-full transition-all duration-300 hover:shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              {/* Speaker Image Column */}
              {speaker && (
                <div className="md:col-span-1 bg-emerald-50 flex items-center justify-center p-4">
                  <div className="relative w-full aspect-square max-w-[180px] overflow-hidden rounded-full border-4 border-white shadow-md">
                    <img
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Webinar Content Column */}
              <div className="md:col-span-2 flex flex-col h-full">
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap gap-4 text-emerald-700 mb-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{webinar.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{webinar.time}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow pt-2">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.shortDescription}</p>

                  {speaker && (
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      <div className="flex flex-col">
                        <h4 className="font-bold text-gray-800">
                          {speaker.name}, {speaker.credentials}
                        </h4>
                        <p className="text-emerald-600 text-sm font-medium mb-2">{speaker.title}</p>
                        <p className="text-sm text-gray-600 line-clamp-2">{speaker.bio}</p>
                        <p className="text-xs text-emerald-700 mt-2 font-medium">Research: {speaker.research}</p>
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
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Register Now</Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default WebinarSchedule
