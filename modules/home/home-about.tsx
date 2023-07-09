import Image from "next/image";
import {
  BsCalendarDayFill,
  BsEmojiHeartEyesFill,
  BsPeopleFill,
} from "react-icons/bs";
import type { IconType } from "react-icons/lib";

interface CardsType {
  Icon: IconType;
  text: string;
}
[];

export default function HomeAbout() {
  const aboutCardsInfo: CardsType[] = [
    {
      Icon: BsCalendarDayFill,
      text: "Year-round events",
    },
    {
      Icon: BsEmojiHeartEyesFill,
      text: "Exciting Activities",
    },
    {
      Icon: BsPeopleFill,
      text: "Happy Friendships",
    },
  ];
  return (
    <section className="home-about">
      <div className="img-container about-img-container">
        <Image
          src="/assets/images/bg.png"
          alt="3D Swirl"
          fill
          priority
          sizes="100%"
          className="about-img"
        />
      </div>
      <div className="about-info-container">
        <h2 className="about-header">Join the exclusive club</h2>
        <p className="about-info">
          Tired of dull weekends and boring nights? TheBunch.ai helps you
          connect with like-minded individuals and participate in exclusive
          social events organized in your city! Be part of the coolest social
          scene ever.
        </p>
        <div className="about-cards-container">
          {aboutCardsInfo.map((data, index: number) => {
            const { Icon } = data;
            return (
              <div className="about-cards" key={index}>
                <Icon />
                <span className="card-text">{data.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
