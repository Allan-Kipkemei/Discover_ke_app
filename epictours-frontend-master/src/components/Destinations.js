import React from "react";
import DestinationCard from "./DestinationCard.js";

function Destinations({
  handleSearch,
  handleSort,
  searchQuery,
  sortOption,
  filteredDestinations,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex items-center justify-between w-full px-10 py-5 bg-white shadow-md">
          {/* Search input */}
          <div className="relative">
            <input
              type="text"
              className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md pr-10 focus:outline-none focus:border-gray-400 focus:ring-0"
              placeholder="Search"
              onChange={handleSearch}
              value={searchQuery}
            />
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0"
              onChange={handleSort}
              value={sortOption}
            >
              <option value="">Sort by</option>
              <option value="location">Location (A-Z)</option>
              <option value="price">Price (Low-High)</option>
            </select>
          </div>
        </div>
        <div className="items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">
            Escape to Your Dream Destination
          </h1>
          {/* Render destinations */}
          <div className="grid grid-cols-1 gap-3 px-28 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.isArray(filteredDestinations) &&
            filteredDestinations.length ? (
              filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))
            ) : (
              <>
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center w-full h-full p-5 bg-white rounded-lg shadow-md"
                  >
                    <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
                    <div className="w-full h-4 mt-3 bg-gray-200 rounded-lg"></div>
                    <div className="w-full h-4 mt-3 bg-gray-200 rounded-lg"></div>
                    <div className="w-full h-4 mt-3 bg-gray-200 rounded-lg"></div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Destinations;
