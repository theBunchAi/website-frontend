import { useState, useCallback } from "react";
import Link from "next/link";
import {
  BsArrowRightCircleFill,
  BsFillCalendarDayFill,
  BsGeoAltFill,
  BsClockFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import { EventCardProps } from "./types";
import ImageContainer from "../image-container";

export type { EventCardProps };

export default function EventCard(props: EventCardProps) {
  const {
    img = { src: "/", alt: "" },
    heading = "Heading",
    description = "lorem ipsum",
    date,
    venue,
    barCodeMsg = heading,
  } = props;
  const { src: imgSrc = "/", alt: imgAlt = "" } = img;
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleActive = () => setIsActive((prevActive) => !prevActive);
  const getTime = useCallback(function getTimeFromDate(dateForTime?: Date) {
    const date = dateForTime ?? new Date();
    let hours: string | number =
      date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const amPm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const time = hours + " : " + minutes + " " + amPm;
    return time;
  }, []);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className={"event-card" + (isActive ? " active" : "")}>
      <ImageContainer src={imgSrc} alt={imgAlt} />
      <div className="card-content-wrapper">
        <h2 className="event-card-heading">{heading}</h2>
        <div className="card-content">
          <div className="compact-view">
            <div className="details-container">
              <div className="detail">
                <BsFillCalendarDayFill className="icon" />
                <span className="text">
                  {`${date.getDate()} ${
                    months[date.getMonth()]
                  } ${date.getFullYear()}`}
                </span>
              </div>
              <div className="detail">
                <BsClockFill className="icon" />
                <span className="text">{getTime(date)}</span>
              </div>
              <div className="detail">
                <BsGeoAltFill className="icon" />
                <span className="text">{venue}</span>
              </div>
            </div>
            <span className="barcode">{barCodeMsg}</span>
          </div>
          <div className="desc-view">
            <p className="event-text">{description}</p>
            <Link
              href="https://forms.gle/zZReFhG4gNHREpkJA"
              className="register-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request an Invite
            </Link>
          </div>
        </div>
      </div>
      <button
        className={"floating-btn" + (isActive ? " with-bg" : "")}
        onClick={toggleActive}
        type="button"
        title="Card Details"
      >
        {isActive ? (
          <BsFillXCircleFill className="icon" />
        ) : (
          <BsArrowRightCircleFill className="icon" />
        )}
      </button>
    </div>
  );
}
