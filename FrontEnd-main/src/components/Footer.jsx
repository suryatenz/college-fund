import React from 'react';
import img from '../assets/img1.jpeg';
import img2 from '../assets/AAhublogo.png';
import img3 from '../assets/statecouncil.png';

const Footer = () => {
  return (
    <div>
      <div
        className="h-60 w-full flex items-start justify-between"
        style={{
          background: 'linear-gradient(97.37deg, rgba(253, 155, 71, 0.9) 0.43%, rgba(255, 255, 255, 0.9) 36.6%, rgba(255, 255, 255, 0.9) 61%, rgba(7, 159, 1, 0.9) 100%)',
        }}
      >
        <div className="flex flex-col items-start justify-start space-x-5 p-5 w-1/3">
          <div className="flex space-x-5 pl-5">
            <img src={img} alt="logo" className="h-20 w-20 mix-blend-multiply" />
            <img src={img2} alt="logo" className="h-20 w-20 mix-blend-multiply" />
            <img src={img3} alt="logo" className="h-20 w-20 mix-blend-multiply" />
          </div>
          <p className="flex items-start font-bold ml-0 mt-10 text-xl text-gray-800 w-96">
            Join the Government of AP in building world-class labs for Junior Colleges.
          </p>
        </div>
        <div className="flex items-center justify-center p-5 w-2/3">
          <div className="w-2/3 ml-52 mt-6">
            <h3 className="font-bold text-2xl mb-3">Quick Links</h3>
            <ul className="space-y-5">
              <li><a href="#about" className="text-lg ml-1 text-gray-700">About</a></li>
              <li><a href="#home" className="text-lg ml-1  text-gray-700">Home</a></li>
              <li><a href="#contributors" className="text-base ml-1 text-gray-700">Contributors</a></li>
            </ul>
          </div>
          <div className="w-3/3 mr-36">
            <h3 className="font-bold text-2xl mb-3">Active Links</h3>
            <ul className="space-y-5">
              <li><a href="https://apsche.ap.gov.in/" className="text-lg text-gray-700">https://apsche.ap.gov.in/</a></li>
              <li><a href="https://www.a-hub.co/" className="text-lg text-gray-700">https://www.a-hub.co/</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
