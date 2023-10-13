import Link from "next/link";
import HeroBannerCommon from "@/components/hero-banner-common";
import ImageContainer from "@/components/image-container";
import { projectData } from "./the-project-data";

export default function TheProjectContainer() {
  const mapper = (data: string, indx: number) => {
    return <li key={indx}>{data}</li>;
  };
  return (
    <div className="the-project-container">
      <HeroBannerCommon module="project" title="The Bucketlist Project" />
      <div className="project-para-container">
        {projectData.map((elem, index) => {
          return (
            <div key={index} className="para">
              <h3 className="question">{elem.question}</h3>
              {typeof elem.answer === "string" ? (
                <p
                  className="answer"
                  dangerouslySetInnerHTML={{ __html: elem.answer }}
                ></p>
              ) : (
                <ol className="answer">{elem.answer.map(mapper)}</ol>
              )}
            </div>
          );
        })}
        <ImageContainer src="/assets/images/curls.webp" alt="curls" />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://forms.gle/2PH8iooZV5JzdC3p9"
          className="btn"
        >
          Start My Adventure
        </Link>
      </div>
    </div>
  );
}
