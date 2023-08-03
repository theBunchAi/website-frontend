import { GetStaticProps } from "next";
import gqlclient from "@/gql/client";
import { briefEventData } from "@/gql/queries";
import { EventCards, EventsHeroBanner } from "@/modules/events";

export const getStaticProps: GetStaticProps = async () => {
  const eventDataObj: Record<string, any> = await gqlclient.request(
    briefEventData
  );
  const eventData: any = eventDataObj?.eventInfoCollection?.items ?? [];
  return {
    props: { eventData: eventData },
    revalidate: 60 * 60 * 6,
  };
};

export default function Events({ eventData }: any) {
  return (
    <section id="events" aria-label="Bunch Ai | Events">
      <EventsHeroBanner />
      <EventCards eventData={eventData} />
    </section>
  );
}
