import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";
import ImageContainer from "../image-container";

export default function Footer() {
  const email = "thebunch22@gmail.com";
  return (
    <footer id="main-footer">
      <ImageContainer
        src="/assets/images/curls.webp"
        alt="The bunch AI | curls"
      />
      <span className="footer-text">Vibes</span>
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
      <a
        className="footer-mail"
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>For any further queries, mail us at :</span>
        <span>{email}</span>
      </a>
    </footer>
  );
}
