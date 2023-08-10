import { GetStaticProps } from "next";
import Head from "next/head";
import gqlclient from "@/gql/client";
import { briefEventData } from "@/gql/queries";
import { EventCards, EventsHeroBanner } from "@/modules/events";
import { eventDataType } from "@/types";

export const getStaticProps: GetStaticProps = async () => {
  const eventDataObj: Record<string, any> = await gqlclient.request(
    briefEventData
  );
  const eventData: eventDataType[] =
    eventDataObj?.eventInfoCollection?.items ?? [];
  return {
    props: { eventData: eventData },
    revalidate: 60 * 60 * 6,
  };
};

export default function Events({ eventData }: { eventData: eventDataType[] }) {
  return (
    <section id="events" aria-label="Bunch Ai | Events">
      <Head>
        <title>The Bunch Ai | Events</title>
        <meta
          name="description"
          content="TheBunch.ai aims to bring like-minded people together for exceptional social experiences,\
          forming friendships and creating memories."
        />
      </Head>
      <EventsHeroBanner />
      <EventCards eventData={eventData} />
    </section>
  );
}
