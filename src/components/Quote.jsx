import React from "react";
import quotesData from "./QuoteData";

function Quote() {
  return (
    <>
      <div className="quotes-container py-12 px-8 flex flex-col gap-8">
        {quotesData.map((obj,idx) => {
          return (
            <div key={idx} className="quote bg-[#1f2937] text-white text-center px-4 py-6 rounded-lg flex flex-col gap-2">
              <p className="text-2xl font-semibold">{obj.quote}</p>
              <p className="text-sm text-gray-400">~ {obj.author}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Quote;
