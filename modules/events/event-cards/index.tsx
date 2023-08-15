import EventCard, { type EventCardProps } from "@/components/event-card";
import { eventDataType } from "@/types";

export default function EventCards({
  eventData,
}: {
  eventData: eventDataType[];
}) {
  const events: EventCardProps[] = eventData.map((item) => ({
    heading: item.eventName,
    date: new Date(item.eventDate),
    description: item.longDescription,
    img: {
      src: item.eventPoster.url,
      alt: item.eventName,
    },
    venue: item.venue,
  }));

  const mapper = (event: EventCardProps, index: number) => {
    return <EventCard key={index} {...event} />;
  };
  return <div id="event-cards">{events.map(mapper)}</div>;
}
