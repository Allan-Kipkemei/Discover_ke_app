import React, { useRef } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cgszw0n",
        "template_8gvhk6g",
        form.current,
        "TNmHmSEVYioQdmA-k"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text: "Message delivered, we will get back to you soon",
            icon: "success",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url('./bg.jpg')` }}
      >
        <div className="container p-10 gap-20">
          <div className="row">
            <div className="col-md-6">
              <div className="text-black mb-10 bg-gray-200 p-10 h-100">
                <h2 className="text-2xl font-bold mb-10 text-black mt-20">
                  Contact Us
                </h2>
                <p className="mb-20" style={{lineHeight:"2"}}>
                  We would love to hear from you! If you have any questions,
                  comments or feedback, please don't hesitate to get in touch
                  with us using the contact details below.
                </p>
                <div className="flex mb-10">
                  <div className="mr-2">
                    <b>Email:</b>
                  </div>
                  <div className="mr-2">epictours@gmail.com</div>
                </div>
                <div className="flex mb-10">
                  <div className="mr-2">
                    <b>Phone:</b>
                  </div>
                  <div className="mr-2">07239887898</div>
                </div>
                <div className="flex mb-10">
                  <div className="mr-2">
                    <b>Address:</b>
                  </div>
                  <div className="mr-2">
                    Epic Building, Suite 301, Kenyatta Avenue
                  </div>
                </div>
                <div className="social-media-icons mb-20 ">
                  <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://ke.linkedin.com">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 bg-gray-200 p-8">
            <br></br>
      <form
        className="max-w-xl mx-auto"
        ref={form}
        onSubmit={sendEmail}
        >
    <h2 className="text-3xl font-bold mb-4 text-black">
      Send us a message
    </h2>
    <div className="form-group mb-3">
      <label className="font-bold  text-black" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        required
      />
    </div>
    <div className="form-group mb-3">
      <label className="font-bold  text-black" htmlFor="email">
        Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        required
      />
    </div>
    <div className="form-group mb-3">
      <label
        className="font-bold  text-black"
        htmlFor="message"
      >
        Message:
      </label>
      <textarea
        name="message"
        id="message"
        className="border border-gray-400 rounded-md px-4 py-2 w-full h-40 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
    </div>
    <div className="text-center">
      <button
        type="submit"
        className="bg-purple-900 hover:bg-purple-600 text-white font-bold rounded-md mt-3 py-2 px-4"
      >
        Submit
      </button>
       </div>
        </form>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
