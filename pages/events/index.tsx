import React from "react";
import type { GetStaticProps } from "next";
import gqlclient from "@/gql/client";
import { briefEventData } from "@/gql/queries";
import type { BriefEventType } from "@/types/pages/event";
import EventsContainer from "@/modules/events/events-container";
import Head from "next/head";
import { companyName, description } from "@/common-data";

export const getStaticProps: GetStaticProps = async () => {
  const eventDataObj: Record<string, any> = await gqlclient.request(
    briefEventData
  );
  const eventData: BriefEventType =
    eventDataObj?.eventInfoCollection?.items ?? [];
  return {
    props: { eventData },
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
