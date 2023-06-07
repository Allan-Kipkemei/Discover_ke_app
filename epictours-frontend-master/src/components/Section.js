import React from "react";
import { Link } from "react-router-dom";
function Section() {
  return (
    <div className="hero">
     <div className="relative flex justify-center items-center">
  <img
    className="w-full h-70"
    src="https://media.cnn.com/api/v1/images/stellar/prod/180508141316-02-amazing-places-africa-table-mountain.jpg?q=x_0,y_0,h_1688,w_2999,c_fill"
    alt="Amazing Places in Africa - Table Mountain"
  />

  <div className="justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h2 className="text-center text-black font-bold text-3xl z-10 mb-6">
      Welcome to Fine Tours
    </h2>
    <p className="text-center text-black text-xl font-sans mb-8">
      Touring all destinations to your pleasing and wish.
    </p>
    <Link
      to="/destinations"
      className="no-underline bg-white px-8 py-4 rounded-full text-black text-xl font-bold hover:bg-gray-500 hover:text-white transition duration-200"
    >
      Get Started
    </Link>
  </div>
</div>

      <div className="popular-destinations mt-16 mb-10">
  <h4 className="mb-8 font-bold text-xl text-left ml-10">
    Popular Destinations
  </h4>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
    {/* Card  */}
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src="https://www.nairobinationalparkkenya.com/wp-content/uploads/2022/03/amboseli-NP-582x393-1.jpg"
        alt=""
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h5 className="font-bold text-m mb-4">Amboseli National Park</h5>
        <p>
          Experience the beauty of Africa's wildlife and natural landscapes at
          Amboseli National Park in southern Kenya.
        </p>
        <div className="mt-4">
          <Link
            to="/destinations"
            className="inline-block bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-md no-underline"
          >
            View
          </Link>
        </div>
      </div>
    </div>

    {/* Card 1 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src="https://www.thesandsatnomad.com/wp-content/uploads/2019/02/diani-beach-kenya-1600x900.jpg"
        alt=""
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h5 className="font-bold text-m mb-4">Diani Beach</h5>
        <p>
          A tropical paradise with stunning white-sand beaches, crystal-clear
          waters, and endless activities to enjoy on the beach.
        </p>
        <div className="mt-4">
          <Link
            to="/destinations"
            className="inline-block bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-md text-decoration no-underline"
          >
            View
          </Link>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src="https://www.jewelsafaris.com/wp-content/uploads/2021/06/lake-nakuru-flamingos.jpg"
        alt=""
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h5 className="font-bold text-m mb-4">Lake Nakuru National Park</h5>
        <p>
          A wildlife lover's dream destination, breathtaking landscapes, home to
          a vast array of animals, including the famous pink flamingos.
        </p>
        <div className="mt-4">
          <Link
            to="/destinations"
            className="inline-block bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-md no-underline"
          >
            View
          </Link>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src="https://images.musement.com/cover/0036/35/thumb_3534914_cover_header.jpeg"
        alt=""
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h5 className="font-bold text-m mb-4">Tsavo National Park</h5>
        <p>
          A journey from Samburu to Tsavo National Park will take you through a
          captivating landscape of rugged terrain, rolling hills, and vast
          plains.
        </p>
        <div className="mt-4">
          <Link
            to="/destinations"
            className="inline-block bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-md no-underline"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
export default Section;
