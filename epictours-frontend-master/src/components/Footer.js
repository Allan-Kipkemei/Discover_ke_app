import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-300 bg-gray-50-purple-300 to-black-300 py-6 px-12">
      <div className="flex justify-center items-center space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-3xl text-blue-600 hover:text-blue-800 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-3xl text-blue-400 hover:text-blue-600 transition-colors duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-3xl text-pink-500 hover:text-pink-700 transition-colors duration-300" />
        </a>
      </div>
      <p className="text-center text-gray-800 text-sm mt-6">
        &copy; 2023, Fine Tours, Inc. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
