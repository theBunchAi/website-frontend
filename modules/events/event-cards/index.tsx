import EventCard, { type EventCardProps } from "@/components/event-card";

export default function EventCards() {
  const events: EventCardProps[] = Array<EventCardProps>(5).fill({
    heading: "Event Title",
    date: new Date(),
    description: "Event Description",
    img: {
      src: "/assets/images/trek.webp",
      alt: "Bunch.ai",
    },
    venue: "here",
  });
  const mapper = (event: EventCardProps, index: number) => (
    <EventCard key={index} {...event} />
  );
  return <div id="event-cards">{events.map(mapper)}</div>;
}
