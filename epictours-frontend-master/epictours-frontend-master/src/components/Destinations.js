import React from "react";
import DestinationCard from "./DestinationCard.js";

function Destinations({
    handleSearch,
    handleSort,
    searchQuery,
    sortOption,
    filteredDestinations

}) {
    return (<>
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex items-center justify-between w-full px-10 py-5 bg-white shadow-md">
                <div className="relative">
                    <input type="text" className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0" placeholder="Search"
                        onChange={handleSearch}
                        value={searchQuery}/>
                    <svg className="absolute w-5 h-5 text-gray-400 right-3 top-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <div className="relative">
                    <select className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0"
                        onChange={handleSort}
                        value={sortOption}>
                        <option value="">Sort by</option>
                        <option value="location">Location (A-Z)</option>
                        <option value="price">Price (Low-High)</option>
                    </select>
                </div>
            </div>

            <div className="items-center justify-center w-full h-full ">
                <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">
                    Escape to Your Dream Destination
                </h1>
                <div className="grid grid-cols-1 gap-3 px-28 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> {
                    filteredDestinations.map((destination) => (<DestinationCard key={
                            destination.id
                        }
                        destination={destination}/>))
                } </div>

                <div className="grid grid-cols-1 gap-3 px-28 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> {/* if the array is empty just show empy 10 boxes */}
                    {
                    filteredDestinations.length === 0 ? (<> {
                        [...Array(20)].map((_, index) => (<div key={index}
                            className="flex flex-col items-center justify-center w-full h-full p-5 bg-white rounded-lg shadow-md">
                            <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
                            <div className="w-full h-4 mt-3 bg-gray-200 rounded-lg"></div>
                            <div className="w-full h-4 mt-3 bg-gray-200 rounded-lg"></div>
                            <div className="w-full h-4 mt-3 bg-gray-200 rounded-lg"></div>
                        </div>))
                    } </>) : (filteredDestinations.map((destination) => (<DestinationCard key={
                            destination.id
                        }
                        destination={destination}/>)))
                } </div>
            </div>
        </div>
    </>);
}

export default Destinations;
