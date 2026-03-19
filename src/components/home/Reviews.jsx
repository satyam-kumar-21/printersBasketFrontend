import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const [activeDot, setActiveDot] = useState(0);

  const reviews = [
    { name: "Sandra K.", location: "Miami, FL", title: "Good Pricing", quote: "The prices were fair, and checkout was easy. My order arrived within the estimated delivery window.", rating: 5 },
    { name: "Lucas W.", location: "Calgary, AB", title: "Great Experience", quote: "I bought a multifunction printer, and the product was exactly as listed. Delivery was on time.", rating: 5 },
    { name: "Emily R.", location: "Toronto, ON", title: "Smooth Shopping", quote: "I ordered a home printer from Prints Basket and the entire process was simple and quick.", rating: 5 },
    { name: "Jonathan D.", location: "New York, NY", title: "Reliable Service", quote: "My office printer died and I needed a replacement fast. These guys delivered exactly.", rating: 5 },
    { name: "Isabella R.", location: "Leeds, UK", title: "Value for Money", quote: "I have already saved a significant amount on refilling ink cartridges. Very happy.", rating: 5 },
    { name: "Madison W.", location: "Austin, TX", title: "Vibrant Prints", quote: "Surprisingly, the photo prints were bright and vibrant. For the price point, I wasn't expecting this.", rating: 5 },
    { name: "Harry W.", location: "Birmingham, UK", title: "Small Office Hero", quote: "This is an easy-to-use printer that can handle the workload without becoming overwhelmed.", rating: 5 },
    { name: "Sophia L.", location: "Seattle, WA", title: "Fast Shipping", quote: "I was worried about shipping a heavy printer, but it was packed perfectly. Arrived early.", rating: 5 },
    { name: "Mark T.", location: "London, UK", title: "Excellent Support", quote: "Had a small question about the driver and the support team responded within minutes.", rating: 5 },
    { name: "Chloe M.", location: "Sydney, AU", title: "Compact and Quiet", quote: "The printer is much quieter than my old one and fits perfectly on my small desk.", rating: 5 },
  ];

  const handleScrollTo = (index) => {
    // We target the ID of the first card in every pair (0, 2, 4, 6, 8)
    const element = document.getElementById(`review-card-${index * 2}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveDot(index);
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">What Customers Say</h2>
          <p className="text-gray-500">Real experiences shared by our community.</p>
        </div>

        {/* Scrollable Container */}
        <div className="flex overflow-x-auto gap-6 pb-10 no-scrollbar snap-x snap-mandatory">
          {reviews.map((review, index) => (
            <div
              id={`review-card-${index}`} // Critical for the scroll to work
              key={index}
              className="min-w-[90%] md:min-w-[calc(50%-12px)] bg-white rounded-2xl p-8 border border-gray-100 shadow-sm snap-start flex flex-col h-[280px]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-orange-400 w-4 h-4" />
                ))}
              </div>
              <h4 className="text-gray-700 font-bold mb-2">{review.title}</h4>
              <p className="text-gray-500 text-sm italic flex-grow">"{review.quote}"</p>
              <div className="mt-6 border-t pt-4">
                <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-tighter">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 5 Dots - Each scrolls 2 reviews */}
        <div className="flex justify-center gap-3 mt-4">
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              onClick={() => handleScrollTo(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                activeDot === i ? 'bg-orange-500 w-8' : 'bg-gray-200 w-2.5'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Reviews;