import React, { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import {AuthContext } from './AuthContext';
import Swal from 'sweetalert2';


const Booking = () => {

  const value = useContext(AuthContext);

  const [phone, setPhone] = useState("");
  const [capacity, setCapacity] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [destination,setDestinations] = useState("");
  const { id } = useParams();


  // useEffect(() => {
  //   console.log(value)
  //   fetch(`https://epic-hcpr.onrender.com/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDestinations(data);
  //       setPrice(data.price);
  //     })
  //     .catch((error) => console.error(error));
  // }, [id,value]);



  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  // const user = sessionStorage.getItem("user_id") ? true : false;
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user);

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleDatehange = (event) => {
    setDate(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const book = {
      phone: phone,
      capacity: capacity,
      date: date,
      destnation_id: id,
      price: price,
      usr_id: user.id
    };
      fetch("https://rocky-cove-76026.herokuapp.com/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          Swal.fire({
            title: 'Success!',
            text: 'Destination Booked',
            icon: 'success',
            confirmButtonText: 'OK'
          });

    });
          
  
  }
  return (
    <div className="m-10 bg-gray-200">
    {isLoggedIn ? (
      <>
        <div className="mx-auto p-10 md:w-1/2">
          <form className="border-2 rounded-lg shadow-lg p-5" onSubmit={handleSubmit}> 
            <h2 className="text-center text-2xl font-bold pb-3">Book Your Destination</h2>
            <div className="mb-4">
              <label className="block font-bold mb-2">Phone No</label>
              <input
                onChange={handlePhoneChange}
                className="w-full p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="phone"
                placeholder="Type Here..."
                value={phone}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Capacity</label>
              <input
                onChange={handleCapacityChange}
                className="w-full p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="capacity"
                placeholder="Type Here..."
                value={capacity}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Date</label>
              <input
                onChange={handleDatehange}
                className="w-full p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="date"
                type="date"
                placeholder="Type Here.."
                value={date}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Price</label>
              <input
                onChange={handlePrice}
                className="w-full p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="price"
                type="price"
                placeholder="Type Here.."
                value={price}
              />
            </div>
            <button
              type="submit"
              className="w-full items-center rounded-md bg-purple-600 hover:bg-purple-700 text-white py-2 px-4"
            >
              Book
            </button>
          </form>
        </div>
      </>
    ) : (
      <p className="bg-white min-h-screen">You must log in first to access this page.</p>
    )}
  </div>
  
  );
};

export default Booking;
