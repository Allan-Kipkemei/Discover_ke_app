import React, { useEffect, useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import About from "./components/About";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Destinations from "./components/Destinations";
import Booking from "./components/Booking";
import AuthProvider from "./components/AuthContext";

function App() {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearch = useCallback(
    (event) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
      const filtered = destinations.filter((destination) =>
        destination.location.toLowerCase().includes(query)
      );
      setFilteredDestinations(filtered);
    },
    [destinations]
  );

  const handleSort = useCallback(
    (event) => {
      const option = event.target.value;
      setSortOption(option);
      const sorted = [...filteredDestinations].sort((a, b) => {
        if (option === "price") {
          return a[option] - b[option];
        } else {
          return a[option].localeCompare(b[option]);
        }
      });
      setFilteredDestinations(sorted);
    },
    [filteredDestinations]
  );

  useEffect(() => {
    fetch("http://localhost:4000/api")
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data);
        setFilteredDestinations(data);
        console.log(data)
      })
      .catch((error) => console.error(error));
      
  }, []);

  return (
    <AuthProvider>
      {" "}
      <Routes>
        {" "}
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar /> <Section /> <Footer />{" "}
            </>
          }
        />{" "}
        <Route
          path="/about"
          element={
            <>
              {" "}
              <Navbar /> <About /> <Footer />{" "}
            </>
          }
        />{" "}
        <Route
          path="/login"
          element={
            <>
              {" "}
              <LogIn /> <Navbar /> <Footer />{" "}
            </>
          }
        />{" "}
        <Route
          path="/booking/:id"
          element={
            <>
              {" "}
              <Navbar /> <Booking destination={destinations} /> <Footer />{" "}
            </>
          }
        />{" "}
        <Route path="/signup" element={<SignUp />} />{" "}
        <Route
          path="/destinations"
          element={
            <>
              {" "}
              <Navbar />{" "}
              <Destinations
                handleSearch={handleSearch}
                handleSort={handleSort}
                searchQuery={searchQuery}
                sortOption={sortOption}
                filteredDestinations={filteredDestinations}
              />{" "}
              <Footer />{" "}
            </>
          }
        />{" "}
        <Route
          path="/contactus"
          element={
            <>
              {" "}
              <Navbar /> <ContactUs /> <Footer />{" "}
            </>
          }
        />{" "}
      </Routes>{" "}
    </AuthProvider>
  );
}

export default App;
