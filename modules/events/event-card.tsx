import { useCallback } from "react";
import type { BriefEventType } from "@/types/pages/event";
import HomeEventCard from "@/components/home-event-card";

export default function EventCard({ eventData }: BriefEventType) {
  const mapper = useCallback(
    (data: BriefEventType["eventData"][0], index: number) => {
      const eventDate = new Date(data?.eventDate ?? null);
      return (
        <HomeEventCard
          key={index}
          image={{ src: data.eventPoster.url, alt: data.eventName }}
          heading={data.eventName}
          date={eventDate}
          venue={data.venue}
          para={data.longDescription}
        />
      );
    },
    []
  );
  return <>{eventData.map(mapper)}</>;
}
