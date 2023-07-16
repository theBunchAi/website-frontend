export interface BriefEventType {
  eventData: {
    eventName: string;
    eventDate: string | number;
    smallDescription: string;
    longDescription: string;
    venue: string;
    time: string;
    eventPoster: {
      url: string;
    };
  }[];
}
