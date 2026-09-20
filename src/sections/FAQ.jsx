import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./FAQ.css";

const faqData = [
  {
    question: "What is Dhyuthi 7.0?",
    answer:
      "Dhyuthi 7.0 is the seventh edition of the flagship event organized by IEEE SCT Student Branch, bringing together technology, creativity, competition and collaboration.",
  },
  {
    question: "Who can participate in Dhyuthi 7.0?",
    answer:
      "Students and participants who meet the eligibility requirements of the respective events and tracks can participate. Specific requirements may vary between events.",
  },
  {
    question: "What events are included in Dhyuthi 7.0?",
    answer:
      "Dhyuthi 7.0 will feature multiple technical tracks, competitions, workshops and other experiences. Explore the Events and Tracks sections for the latest details.",
  },
  {
    question: "Will participants receive certificates?",
    answer:
      "Certificate eligibility will depend on the event or track. Details regarding certificates will be announced along with the respective event information.",
  },
  {
    question: "Where will Dhyuthi 7.0 take place?",
    answer:
      "Dhyuthi 7.0 will be conducted at Sree Chitra Thirunal College of Engineering, Pappanamcode, Thiruvananthapuram.",
  },
  {
    question: "How can I register?",
    answer:
      "Registration details will be available through the Register section of this website. Follow the event-specific instructions provided there.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">

      <div className="faq-header">

        <div className="faq-label">
          <span className="faq-dot" />
          DHYUTHI 7.0 / FAQ
        </div>

        <span className="faq-count">
          06 QUESTIONS
        </span>

      </div>

      <div className="faq-heading">

        <p>NEED TO KNOW</p>

        <h2>
          QUESTIONS
          <span>?</span>
        </h2>

      </div>

      <div className="faq-list">

        {faqData.map((item, index) => {

          const isOpen = openIndex === index;

          return (
            <div
              className={`faq-item ${
                isOpen ? "faq-open" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >

                <div className="faq-number">
                  0{index + 1}
                </div>

                <span className="faq-question-text">
                  {item.question}
                </span>

                <span className="faq-icon">
                  {isOpen ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>

              </button>

              <div className="faq-answer-wrapper">

                <div className="faq-answer">
                  {item.answer}
                </div>

              </div>

            </div>
          );
        })}

      </div>

      <div className="faq-bottom">

        <span>
          STILL CURIOUS?
        </span>

        <span className="faq-line" />

        <span>
          EXPLORE DHYUTHI 7.0
        </span>

      </div>

    </section>
  );
}

export default FAQ;