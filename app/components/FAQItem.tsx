"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface FAQItemProps {
  question: string;
  answer: string;
  author: {
    name: string;
    role: string;
  };
}

export default function FAQItem({ question, answer, author }: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`faq-item p-6 rounded-lg ${isExpanded ? "active" : ""}`}>
      <button onClick={() => setIsExpanded(!isExpanded)} className="w-full flex items-start justify-between text-left">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
          <p className="mt-2 text-sm text-gray-500">
            {author.name} · {author.role}
          </p>
        </div>
        <ChevronRightIcon className="arrow-icon w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
      </button>

      {isExpanded && (
        <div className="mt-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}
