import { webinars, getSpeakerByWebinarId } from "@/lib/data";
import type { Metadata } from "next";
import WebinarPageClient from "@/components/webinar-page-client";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const webinar = webinars.find((w) => w.id === id);

  if (!webinar) {
    return {
      title: "Webinar Not Found",
    };
  }

  const speaker = getSpeakerByWebinarId(id);
  const imageUrl = speaker?.image || "/meta.webp";

  return {
    title: webinar.title,
    description: webinar.description,
    openGraph: {
      title: webinar.title,
      description: webinar.description,
      url: `https://ndwebinars.com/webinars/${id}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: webinar.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: webinar.title,
      description: webinar.description,
      images: [imageUrl],
    },
  };
}

export default async function WebinarPage({ params }: Props) {
  const { id } = await params;
  return <WebinarPageClient id={id} />;
}
