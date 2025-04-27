import React, { useContext, useEffect, useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { RestaurantDataContext } from "../contexts/RestaurantDataProvider";

function Restaurant() {
  const { restaurantData } = useContext(RestaurantDataContext);

  // Pagination setup
  const cardsPerPage = 12;
  const totalPages = Math.ceil(restaurantData.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Get current page data
  let startIndex = (currentPage - 1) * cardsPerPage;
  let endIndex = startIndex + cardsPerPage;

  const [currentData, setCurrentdata] = useState(
    restaurantData.slice(startIndex, endIndex)
  );

  useEffect(() => { 
     startIndex = (currentPage - 1) * cardsPerPage;
     endIndex = startIndex + cardsPerPage;
    setCurrentdata(restaurantData.slice(startIndex, endIndex));
  }, [currentPage, restaurantData]);

  // Page change handler
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // searching setup
  const [searchQuery, setSearchQuery] = useState("");
  function handleSearch(query) {
    setSearchQuery(query);
    if (query.length > 0) {
      setCurrentdata(currentData.filter((obj) => obj.name.includes(query)));
    } else {
      setCurrentdata(restaurantData.slice(startIndex, endIndex));
    }
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter Restaurant Name"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="border-1 my-4 mx-[50%] transform translate-x-[-50%] p-1"
      />

      <div className="restaurant-container min-h-screen bg-red-50">
        <div className="cards flex flex-wrap justify-center items-center gap-6 p-2">
          {currentData.map((obj, idx) => (
            <div
              key={idx}
              className="bg-gray-50 w-[300px] h-[220px] rounded-md flex flex-col justify-between"
            >
              <div className="top p-2 flex flex-col gap-2">
                <p className="text-xl text-gray-800 font-semibold">
                  {obj.name} {obj.ratings} {idx}
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
    </>
  );
}

export default Restaurant;
