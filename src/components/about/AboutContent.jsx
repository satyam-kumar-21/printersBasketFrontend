import React from "react";
import { CheckCircle2, Truck, Headphones, Info, Shield, Zap } from "lucide-react";
import aboutImage from "../../../public/assets/aboutOrange.jpg"
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* Main Story Section */}
        <div className="mb-8 sm:mb-12 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Text Section */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                Prints Basket is an independent online retailer dedicated to providing a reliable and transparent shopping experience for printers and printing essentials. Our goal is simple: to help customers find the right printing products with clarity, convenience, and confidence.
              </p>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                We offer a carefully selected range of home, office, and small-business printers, along with compatible ink, toner, and accessories. All products listed on our platform are sourced through authorized distributors, ensuring authenticity and standard manufacturer warranties where applicable.
              </p>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                We present product information accurately and clearly so customers can make well-informed purchase decisions. Whether you are setting up a home workspace or managing everyday office printing needs, Prints Basket provides a straightforward and stress-free shopping experience.
              </p>
            </div>

            {/* Image Section */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-100 rounded-3xl blur-2xl opacity-30"></div>
                <img
                  src={aboutImage}
                  alt="About Prints Basket"
                  className="relative w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision - Two Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-20">
          {/* Mission */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 lg:p-8 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-base lg:text-lg leading-relaxed">
              To make purchasing printing products simple, trustworthy, and efficient by offering accurate product information, reliable delivery, and responsive customer support for product and order-related inquiries.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 lg:p-8 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                <Info className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-base lg:text-lg leading-relaxed">
              To become a trusted online destination for printers and printing essentials by consistently maintaining transparency, product reliability, and a customer-centered approach.
            </p>
          </div>
        </div>

        {/* What We Offer - Four Columns */}
        <div className="mb-8 sm:mb-12 lg:mb-20">
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 text-center">
            What We Offer
          </h3>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6 sm:mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {/* Curated Products */}
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg p-3 sm:p-4 lg:p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <CheckCircle2 className="w-5 sm:w-7 h-5 sm:h-7 text-blue-600" />
              </div>
              <h4 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                A Curated Product Range
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                A wide selection of printers, ink, toner, and related accessories designed to meet personal, home-office, and business printing requirements.
              </p>
            </div>

            {/* Clear Info */}
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg p-3 sm:p-4 lg:p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <Info className="w-5 sm:w-7 h-5 sm:h-7 text-blue-600" />
              </div>
              <h4 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                Clear & Accurate Information
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Detailed descriptions, specifications, and compatibility information so you can confidently select the right product for your needs.
              </p>
            </div>

            {/* Reliable Delivery */}
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg p-3 sm:p-4 lg:p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <Truck className="w-5 sm:w-7 h-5 sm:h-7 text-green-600" />
              </div>
              <h4 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                Reliable Delivery
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Orders processed through trusted fulfillment channels with clear delivery timelines communicated during checkout.
              </p>
            </div>

            {/* Customer Support */}
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg p-3 sm:p-4 lg:p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <Headphones className="w-5 sm:w-7 h-5 sm:h-7 text-purple-600" />
              </div>
              <h4 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                Responsive Support
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Available via email and live chat to help with product questions, order updates, and purchase-related inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us - Grid */}
        <div className="mb-8 sm:mb-12 lg:mb-20">
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 text-center">
            Why Customers Choose Prints Basket
          </h3>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6 sm:mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {[
              { icon: "🏢", title: "Trusted Independent Retailer", desc: "An independent online business focused on your satisfaction" },
              { icon: "🔍", title: "Transparent Product Information", desc: "No misleading claims - only accurate, honest details" },
              { icon: "📦", title: "Wide Product Selection", desc: "Complete range of printers and printing supplies" },
              { icon: "⚡", title: "Fast & Dependable Delivery", desc: "Quick processing through reliable fulfillment partners" },
              { icon: "🔒", title: "Secure Checkout", desc: "Easy shopping with secure payment processing" },
              { icon: "💬", title: "Helpful Customer Support", desc: "Expert assistance for product and order inquiries" },
              { icon: "✨", title: "Honest Representation", desc: "Aligned with advertising guidelines and best practices" },
              { icon: "⭐", title: "Customer-Centered Approach", desc: "Your needs and satisfaction are our priority" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg p-3 sm:p-4 lg:p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex gap-2 sm:gap-4">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Independent Retailer Notice */}
        <div className="mb-8 sm:mb-12 lg:mb-20 bg-gradient-to-r from-blue-50 via-blue-50 to-indigo-50 rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-10 border-2 border-blue-200">
          <div className="flex items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-1" />
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
              Independent Retailer Notice
            </h3>
          </div>
          
          <div className="space-y-3 sm:space-y-4 text-gray-700">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              <strong>Prints Basket operates as an independent online retail platform.</strong> We are not affiliated with, endorsed by, or an authorized reseller of any printer manufacturer or brand.
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              All trademarks, logos, and product identifiers displayed on our website belong to their respective owners. They are used solely for identification and comparison purposes and do not indicate any partnership or endorsement.
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Products are fulfilled through authorized distribution partners and include standard manufacturer warranties where applicable. All communication, retail policies, and customer service are provided exclusively by Prints Basket.
            </p>
          </div>
        </div>

        {/* Microsoft Ads Compliance */}
        <div className="mb-8 sm:mb-12 lg:mb-20 bg-gradient-to-r from-amber-50 via-amber-50 to-blue-50 rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-10 border-2 border-amber-200">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Commitment to Compliance
          </h3>
          
          <div className="space-y-3 sm:space-y-4 text-gray-700">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              To ensure full compliance with advertising guidelines and customer protection standards, the following principles are reflected throughout our operations:
            </p>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-base lg:text-lg">
                <CheckCircle2 className="w-4 sm:w-6 h-4 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>We do not claim special pricing, affiliation, or guaranteed performance unless verifiable</span>
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-base lg:text-lg">
                <CheckCircle2 className="w-4 sm:w-6 h-4 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>We clearly identify ourselves as an independent retailer</span>
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-base lg:text-lg">
                <CheckCircle2 className="w-4 sm:w-6 h-4 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>All product descriptions are accurate and based on manufacturer-provided information</span>
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-base lg:text-lg">
                <CheckCircle2 className="w-4 sm:w-6 h-4 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>No services are offered beyond what is explicitly stated (no repair, setup, or troubleshooting)</span>
              </li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-base lg:text-lg">
                <CheckCircle2 className="w-4 sm:w-6 h-4 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Customer support is limited to product and order-related inquiries only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 text-center text-white">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Ready to Find Your Perfect Printer?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg mb-5 sm:mb-8 opacity-95">
            Explore our curated selection of printing products with confidence.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-blue-600 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Start Shopping
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutContent;
