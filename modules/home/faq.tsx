interface FaqDataType {
  question: string;
  answer: string;
}
[];

export default function Faq() {
  const faqData: FaqDataType[] = [
    {
      question: "Why should I join TheBunch.ai?",
      answer:
        "TheBunch.ai aims to bring like-minded people together for exceptional social experiences, forming friendships and creating memories.",
    },
    {
      question: "How are the events organized?",
      answer:
        "The events are organized by our creative team in collaboration with local partners for an authentic experience.",
    },
  ];
  return (
    <section className="faq">
      <h2 className="faq-header">Faqs</h2>
      <div className="faq-cards-container">
        {faqData.map((data, index: number) => {
          return (
            <div className="faq-cards" key={index}>
              <span className="question">{data.question}</span>
              <span className="answer">{data.answer}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
