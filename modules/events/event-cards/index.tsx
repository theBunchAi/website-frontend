import EventCard, { type EventCardProps } from "@/components/event-card";

export default function EventCards({ eventData }: { eventData: any }) {
  const events: EventCardProps[] = eventData.map((item: any) => ({
    heading: item.eventName,
    date: new Date(item.eventDate),
    description: item.longDescription,
    img: {
      src: item.eventPoster.url,
      alt: item.eventName,
    },
    venue: item.venue,
  }));

  const mapper = (event: EventCardProps, index: number) => (
    <EventCard key={index} {...event} />
  );
  return <div id="event-cards">{events.map(mapper)}</div>;
}
