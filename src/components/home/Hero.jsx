import React from "react";
import printer from "../../../public/assets/printer.png"; // replace with your image

const Hero = () => {
  return (
    <section className="w-full  px-4">
      <div className="md:max-w-[90%] max-w-[100%] mx-auto rounded-2xl overflow-hidden relative">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c4d] via-[#0d2a7a] to-[#2364EB]"></div>

        {/* OPTIONAL PATTERN EFFECT */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%),radial-gradient(circle_at_80%_70%,white,transparent_40%)]"></div>

        {/* CONTENT */}
        <div className="relative z-10 grid md:grid-cols-2 items-center p-8 md:p-14">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Smart Printing <br /> Starts Here
            </h1>

            <p className="text-gray-200 text-sm md:text-base max-w-md">
              Discover dependable printers and printing supplies designed to
              keep your workflow running smoothly. Experience effortless
              shopping and fast delivery with Prints Basket.
            </p>

            <button className="bg-white text-[#2364EB] px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
              View Collection
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
            <img
              src={printer}
              alt="Printer"
              className="w-[280px] md:w-[420px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;