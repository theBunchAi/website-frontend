import { useCallback, useEffect, useRef } from "react";
import ImageContainer from "@/components/image-container";

export default function Cards() {
  const obsvOpts = useRef<IntersectionObserverInit>({
    threshold: 0.75,
  });
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const obsvCallback = useCallback<IntersectionObserverCallback>(
    function observerCallback(entries, obv) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obv.unobserve(entry.target);
        }
      });
    },
    []
  );
  useEffect(() => {
    const cardContainer = cardContainerRef.current;
    if (cardContainer) {
      const intersectionObserver = new IntersectionObserver(
        obsvCallback,
        obsvOpts.current
      );
      const targets = cardContainer.querySelectorAll(".card");
      targets.forEach((target) => intersectionObserver.observe(target));
      return () => intersectionObserver.disconnect();
    }
    return;
  }, [obsvCallback]);
  return (
    <div id="home-cards" ref={cardContainerRef}>
      <div className="card">
        <ImageContainer src="/assets/images/trek.webp" alt="Bunch Ai scene" />
        <div className="card-content">
          <h3>From Casual Mixers to Themed Parties - Never A Dull Moment!</h3>
          <p>
            We&apos;ve got an event for everyone. Connect with fellow foodies,
            game-lovers, outdoor enthusiasts, and more!
          </p>
        </div>
      </div>
      <div className="card">
        <ImageContainer
          src="/assets/images/sunrise.webp"
          alt="Bunch Ai scene"
        />
        <div className="card-content">
          <h3>From Casual Mixers to Themed Parties - Never A Dull Moment!</h3>
          <p>
            We&apos;ve got an event for everyone. Connect with fellow foodies,
            game-lovers, outdoor enthusiasts, and more!
          </p>
        </div>
      </div>
    </div>
  );
}
