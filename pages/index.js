import React from "react";
import Image from 'next/image';
import gradpic from '/assets/gradpic.jpeg';
import Layout from '../components/layout';

const HeroSection = () => {
  return (
    <div>
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            HELLO! My name is Rojan.<br />
            I’m a recent graduate from Whitworth University with a B.A. in CS. <br />
            I’m exploring new grad roles for SWE and Data Analyst.
          </h2>
          {/* <p className="text-gray-400 mb-6">
            [Insert your custom intro here instead of filler text.]
          </p> */}
          <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-semibold transition">
            SAY HI
          </button>
        </div>

        {/* Image */}
        <div>
          <Image
            src={gradpic}
            alt="Not Found"
            className="rounded-md max-w-xs md:max-w-sm shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
