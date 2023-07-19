import type { GetStaticProps } from "next";
import Head from "next/head";
import { companyName, description } from "@/common-data";
import { briefEventData } from "@/gql/queries";
import gqlclient from "@/gql/client";
import EventsContainer from "@/modules/events/events-container";
import type { BriefEventType } from "@/types/pages/event";

export const getStaticProps: GetStaticProps = async () => {
  const eventDataObj: Record<string, any> = await gqlclient.request(
    briefEventData
  );
  const eventData: BriefEventType =
    eventDataObj?.eventInfoCollection?.items ?? [];
  return {
    props: { eventData: eventData },
    revalidate: 60 * 60 * 6,
  };
};

export default function Event({ eventData }: BriefEventType) {
  return (
    <>
      <Head>
        <title>{`Events | ${companyName}`}</title>
        <meta name="description" content={description} />
      </Head>
      <section className="events">
        <EventsContainer eventData={eventData} />
      </section>
    </>
  );
}
