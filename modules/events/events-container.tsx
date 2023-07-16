import { BriefEventType } from "@/types/pages/event";
import EventCard from "./event-card";
import PageHeading from "@/components/page-heading";

export default function EventsContainer({ eventData }: BriefEventType) {
  return (
    <>
      <PageHeading text="Events" height="40vh" fontSize="8rem" />

      <div className="event-cards-container">
        <EventCard eventData={eventData} />
      </div>
    </>
  );
}
