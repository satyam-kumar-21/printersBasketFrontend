import React from 'react';
import officePrinter from "/assets/officePrinter.png"; // replace with your office printer image
import laserPrinter from "/assets/laserPrinter.png"; // replace with your laser printer image

const PrinterBanners = () => {
    const banners = [
        {
            title: "Office Printer",
            subtitle: "NEW COLLECTION",
            link: "/product-category/office-printers",
            bgClass: "bg-black",
            image: officePrinter, // Replace with your office printer image
            textColor: "text-white",
            buttonBorder: "border-white",
        },
        {
            title: "Laser Printer",
            subtitle: "NEW COLLECTION",
            link: "/product-category/laser-printers",
            // Gradient matching the orange/warm tone in the screenshot
            bgClass: "bg-gradient-to-r from-[#e67e22] to-[#f39c12]",
            image: laserPrinter, // Replace with your laser printer image
            textColor: "text-white",
            buttonBorder: "border-white",
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-xl h-[300px] md:h-[350px] flex items-center p-8 md:p-12 ${banner.bgClass} group`}
                    >
                        {/* Text Content */}
                        <div className="relative z-10 w-1/2">
                            <p className={`text-xs font-bold tracking-widest uppercase mb-3 opacity-80 ${banner.textColor}`}>
                                {banner.subtitle}
                            </p>
                            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 ${banner.textColor}`}>
                                {banner.title}
                            </h2>
                            <a
                                href={banner.link}
                                className={`inline-block border ${banner.buttonBorder} ${banner.textColor} px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black`}
                            >
                                Shop Now
                            </a>
                        </div>

                        {/* Product Image */}
                        {/* Product Image */}
                        <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center p-4 pointer-events-none">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="object-contain w-full max-h-[90%] transform transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                            />
                        </div>

                        {/* Subtle decorative overlay (optional) */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrinterBanners;