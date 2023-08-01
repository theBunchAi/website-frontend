import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";
import ImageContainer from "../image-container";

export default function Footer() {
  return (
    <footer id="main-footer">
      <ImageContainer
        src="/assets/images/curls.webp"
        alt="The bunch AI | curls"
      />
      <span className="footer-text">Love</span>
      <div className="socials">
        <a
          href="https://m.facebook.com/people/The-Bunchai/100080487391695/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookCircleFill />
        </a>
        <a
          href="http://instagram.com/thebunch.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill />
        </a>
      </div>
    </footer>
  );
}
