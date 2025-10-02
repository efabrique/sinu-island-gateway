import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const faqs = [
  {
    question: "Q. How do I apply for admission?",
    answer:
      "A. You can apply by visiting our admission page, filling out the application form, and submitting required documents.",
  },
  {
    question: "Q. What scholarships are available?",
    answer:
      "A. We offer merit-based, need-based, and special scholarships. Visit the Scholarships page for full details.",
  },
  {
    question: "Q. Can I apply as an international student?",
    answer:
      "A. Yes, we welcome international students. You’ll need to meet entry requirements and visa regulations.",
  },
  {
    question: "Q. How do I contact student services?",
    answer:
      "A. Our Student Services office is available via email, phone, or in person at the campus center.",
  },
];

const StudentsFAQSection: React.FC = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<null | typeof faqs[0]>(null);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + 1;
        const itemHeight = 90; // button height
        const resetPoint = faqs.length * itemHeight;
        return newOffset >= resetPoint ? 0 : newOffset;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [paused]);

  const handleClick = (faq: typeof faqs[0], idx: number) => {
    setSelectedFAQ(faq);
    setPaused(true);
    const itemHeight = 90;
    setOffset(idx * itemHeight);
  };

  const handleClose = () => {
    setSelectedFAQ(null);
    setPaused(false);
  };

  return (
    <section className="py-10 bg-black/25">
      <div className="container mx-auto px-4 ">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#222222] mb-10">
          Frequently Asked Questions
          <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>
        </h2>

        {/* Scrollable Questions */}
        <div className="relative h-64 flex items-center justify-center overflow-hidden">
          <div
            ref={containerRef}
            className="absolute flex flex-col items-center w-full"
            style={{
              transform: `translateY(-${offset}px)`,
              transition: paused ? "none" : "transform 0.03s linear",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {faqs.concat(faqs).map((faq, idx) => (
              <button
                key={idx}
                onClick={() => handleClick(faq, idx % faqs.length)}
                className="w-full max-w-2xl text-center p-5 m-3 bg-black rounded-lg shadow hover:bg-blue-500 transition"
              >
                <span className=" text-[#fff] text-lg">
                  {faq.question}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedFAQ && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative animate-fadeIn">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-xl font-bold text-[#222222] mb-4">
              {selectedFAQ.question}
            </h3>
            <p className="text-gray-600">{selectedFAQ.answer}</p>
          </div>
        </div>
      )}

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default StudentsFAQSection;
