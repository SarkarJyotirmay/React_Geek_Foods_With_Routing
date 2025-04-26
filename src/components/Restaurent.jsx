import React, { useContext, useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { RestaurantDataContext } from "../contexts/RestaurantDataProvider";

function Restaurant() {
  const { restaurantData } = useContext(RestaurantDataContext);

  // Pagination setup
  const cardsPerPage = 12;
  const totalPages = Math.ceil(restaurantData.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Get current page data
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentData = restaurantData.slice(startIndex, endIndex);

  // Page change handler
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="restaurant-container min-h-screen bg-red-50">
      <div className="cards flex flex-wrap justify-center items-center gap-6 p-2">
        {currentData.map((obj, idx) => (
          <div
            key={idx}
            className="bg-gray-50 w-[300px] h-[220px] rounded-md flex flex-col justify-between"
          >
            <div className="top p-2 flex flex-col gap-2">
              <p className="text-xl text-gray-800 font-semibold">
                {obj.name} {obj.ratings}
              </p>
              <p className="text-sm">{obj.street}</p>
              <p className="text-lg">{obj.city}</p>
            </div>

            <div className="bottom rounded-b-md bg-sky-100 py-2 flex flex-col gap-2 p-2 text-xl font-semibold">
              <p className="flex gap-2 items-center">
                <GiKnifeFork className="rotate-10 text-green-600" />
                <span className="text-blue-700 hover:text-blue-900 cursor-pointer">
                  visit menu
                </span>
              </p>
              <p>{obj.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination flex justify-center items-center gap-4 p-4">
        <button
          className="border border-indigo-500 py-1.5 px-2 rounded-md"
          onClick={() => goToPage(currentPage - 1)}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            className={`w-[2rem] h-[2rem] rounded-full flex justify-center items-center border border-indigo-500 ${
              currentPage === i + 1 ? "bg-purple-300" : ""
            }`}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="border border-indigo-500 py-1.5 px-2 rounded-md"
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Restaurant;
