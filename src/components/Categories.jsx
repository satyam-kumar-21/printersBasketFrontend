import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Home Printers",
    image: "/categories/homePrinter.jpg",
    filterType: "usage",
    filterValue: "Home"
  },
  {
    title: "Office Printers",
    image: "/categories/officePrinter.jpg",
    filterType: "usage",
    filterValue: "Office"
  },
  {
    title: "Inkjet Printers",
    image: "/assets/inkjet.png",
    filterType: "technology",
    filterValue: "Inkjet"
  },
  {
    title: "Laser Printers",
    image: "/categories/laserPrinter.jpg",
    filterType: "technology",
    filterValue: "Laser"
  },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (filterType, filterValue) => {
    if (filterType === "usage") {
      navigate(`/shop?usageCategory=${filterValue}`);
    } else if (filterType === "technology") {
      navigate(`/shop?technology=${filterValue}`);
    }
  };

  return (
    <section className="bg-[#f5f6f8] py-20">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 tracking-tight">
            Explore Printer Categories
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Browse commonly requested printer-related categories to quickly find
            relevant information and appointment options.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {categories.map((item, index) => {
            return (
              <button
                onClick={() => handleCategoryClick(item.filterType, item.filterValue)}
                key={index}
                className="text-center group cursor-pointer bg-transparent border-none p-0"
              >

                {/* IMAGE CARD */}
                <div className="bg-white rounded-2xl p-6 shadow-sm 
                                transition-all duration-300 
                                group-hover:shadow-lg 
                                group-hover:-translate-y-2">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 md:h-40 object-contain mx-auto 
                               transition duration-300 
                               group-hover:scale-110"
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-gray-800 font-medium text-sm md:text-base 
                               transition duration-300 
                               group-hover:text-[#2364EB]">
                  {item.title}
                </h3>

                {/* UNDERLINE */}
                <div className="h-[2px] w-0 bg-[#2364EB] mx-auto mt-2 
                                transition-all duration-300 
                                group-hover:w-12">
                </div>

              </button>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Categories;
