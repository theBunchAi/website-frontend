import Image from "next/image";

export default function PageBackground() {
  return (
    <div className="page-bg-img-container">
      <Image
        src="/assets/images/curve-bg.jpg"
        fill
        sizes="100%"
        alt="The Bunch Ai"
      />
    </div>
  );
}
