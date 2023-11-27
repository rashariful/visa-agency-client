import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
// import faqData from "./faqData";
const faqData = [
  {
    id: 1,
    question: "Qualification for a Canada Tourist Visa?",
    answer:
      "Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem",
  },
  {
    id: 2,
    question: "Do you guarantee a visa approval?",
    answer:
      "Nemo ipsam egestas volute turpis dolores aliquam quaerat sodales sapien pretium purus ligula tempus ipsum undo auctor a mauris lectus ipsum blandit porta justo integer feugiat",
  },
  {
    id: 3,
    question: "How long does the application process take?",
    answer:
      "Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor eros congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida donec enim ipsum",
  },
  {
    id: 4,
    question: "How long does the application process take?",
    answer:
      "Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor eros congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida donec enim ipsum",
  },
  {
    id: 5,
    question: "How long does the application process take?",
    answer:
      "Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor eros congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida donec enim ipsum",
  },
];
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-8 text-slate-600">
        Frequently Asked Questions
      </h1>

      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleAnswer(index)}
            className={`w-full shadow text-left drop-shadow-sm bg-slate-100 hover:bg-primary hover:text-white duration-300 p-3 font-semibold  flex justify-between 
            ${openIndex === index
                ? " text-primary rounded-t-md bg-info"
                : "text-slate-600 rounded-md"}`}
          >
           0{index +1}. {faq.question}
            <span className="transform transition-transform duration-300">
              {openIndex === index ? (
                <HiChevronUp size={24} />
              ) : (
                <HiChevronDown size={24} />
              )}
            </span>
          </button>
          <div
            className={`p-4 bg-gray-100 transition-all duration-700 ease-in-out text-gray-500 ${
              openIndex === index
                ? "max-h-96 opacity-100 duration-300 rounded-b-md drop-shadow"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
