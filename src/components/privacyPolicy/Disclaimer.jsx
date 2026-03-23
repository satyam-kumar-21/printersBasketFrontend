import React from "react";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Breadcrumb Navigation */}
        <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Disclaimer</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Disclaimer
          </h1>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-10">

          {/* Introduction */}
          <div className="space-y-4 bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed text-lg">
              Prints Basket strives to provide accurate, clear, and helpful information to assist customers in making informed purchasing decisions. This Disclaimer applies to all content, products, and services offered through our website.
            </p>
          </div>

          {/* 1. Product Information & Accuracy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Product Information & Accuracy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We make every reasonable effort to ensure that product details—such as specifications, descriptions, pricing, availability, and images—are accurate and up to date. However:
            </p>
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Manufacturers may update product specifications, packaging, or features without prior notice</li>
                <li>Product colors, print yields, and performance may vary depending on lighting, device display settings, paper type, and usage conditions</li>
                <li>Page yield estimates are based on standardized testing and may differ in real-world use</li>
                <li>Occasional typographical errors, outdated listings, or minor inaccuracies may occur</li>
              </ul>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              Prints Basket is not obligated to update or correct product information immediately following manufacturer changes or unintentional errors.
            </p>
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400 mt-3">
              <p className="text-gray-600">
                All product information is provided <strong>as-is</strong> for general reference and should not be considered a guarantee of performance.
              </p>
            </div>
          </div>

          {/* 2. Usage & Performance Disclaimer */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Usage & Performance Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Actual performance of printers and related products may vary due to factors beyond our control, including:
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Printing frequency and volume</li>
                <li>Environmental conditions (humidity, temperature, dust)</li>
                <li>Type of ink, toner, or paper used</li>
                <li>Regular maintenance or print head condition</li>
                <li>Use of compatible, third-party, or remanufactured cartridges</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500 mb-4">
              <p className="text-gray-600">
                Any cost savings, print capacity estimates, or efficiency claims are based on general manufacturer guidance and are <strong>not guaranteed</strong> to match individual user results.
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
              <p className="text-gray-600 font-medium">
                Prints Basket does not guarantee specific print yields, running costs, or performance outcomes.
              </p>
            </div>
          </div>

          {/* 3. Third-Party Branding & Warranties */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Third-Party Branding & Warranties</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All product names, brand logos, trademarks, and images (including those of HP, Canon, Epson, Brother, and others) belong to their respective owners. They are used solely for identification and compatibility purposes.
            </p>
            
            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500 mb-4">
              <p className="text-gray-700 font-medium mb-3">Prints Basket:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Operates as an <strong>independent online retailer</strong></li>
                <li>Is <strong>not affiliated with, endorsed by, or authorized by</strong> any printer manufacturer, unless explicitly stated</li>
                <li>Does <strong>not claim any special status, certification, or dealership</strong> with any brand</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Manufacturer Warranties</h3>
              <p className="text-gray-600 leading-relaxed">
                Manufacturer warranties apply according to their individual terms and conditions. Warranty coverage may vary by region, product type, and usage practices.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
              <p className="text-gray-600">
                Use of <strong>third-party or non-OEM cartridges</strong> may impact manufacturer warranty coverage depending on brand policies. Customers should review their manufacturer's warranty documentation for clarification.
              </p>
            </div>
          </div>

          {/* 4. No Professional or Technical Advice */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. No Professional or Technical Advice</h2>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 mb-4">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Information provided on our website is for <strong>general informational purposes only</strong>.</li>
                <li>It should <strong>not be considered technical, legal, or professional advice</strong>.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 font-medium mb-3">Customers are responsible for verifying:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Product compatibility</li>
                <li>Usage requirements</li>
                <li>Warranty conditions</li>
                <li>Installation or setup information</li>
              </ul>
              <p className="text-gray-600 mt-3">
                For any concerns about product compatibility or warranty implications, please contact us before making a purchase.
              </p>
            </div>
          </div>

          {/* 5. Need Assistance */}
          <div className="space-y-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-semibold">5. Need Assistance?</h2>
            <p className="leading-relaxed">
              Our customer support team is available to help with general product inquiries, order questions, and basic guidance before purchase.
            </p>
            <div className="space-y-2 text-blue-50">
              <p>📧 <strong>Email:</strong> <a href="mailto:support@printsbasket.com" className="underline hover:text-white">support@printsbasket.com</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
