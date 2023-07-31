import React from "react";
import {
  BsCalendarDayFill,
  BsEmojiHeartEyesFill,
  BsPeopleFill,
} from "react-icons/bs";
import ImageContainer from "@/components/image-container";

export default function Join() {
  return (
    <div id="home-join-us">
      <h2>Join the exclusive club</h2>
      <p className="home-join-text">
        Tired of dull weekends and boring nights? TheBunch.ai helps you connect
        with like-minded individuals and participate in exclusive social events
        organized in your city! Be part of the coolest social scene ever.
      </p>
      <div className="perks">
        <div className="perk">
          <BsCalendarDayFill />
          <span>Year round events</span>
        </div>
        <div className="perk">
          <BsEmojiHeartEyesFill />
          <span>Exciting activities</span>
        </div>
        <div className="perk">
          <BsPeopleFill />
          <span>Happy Friendships</span>
        </div>
      </div>
      <ImageContainer src="/assets/images/curls.webp" alt="curls" />
    </div>
  );
}
