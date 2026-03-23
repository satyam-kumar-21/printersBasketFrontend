import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Breadcrumb Navigation */}
        <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Terms & Conditions</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Last Updated: January 21, 2026
          </p>
        </div>

        <div className="space-y-10">

          {/* Introduction */}
          <div className="space-y-4 bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed text-lg">
              Please read these terms carefully before using our services.
            </p>
          </div>

          {/* 1. Agreement to Terms */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Agreement to Terms</h2>
            <div className="space-y-3 border-l-4 border-blue-300 pl-4">
              <p className="text-gray-600 leading-relaxed">
                By accessing or using Prints Basket, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. These terms govern your use of our website, products, and customer support services. If you do not agree with any part of these terms, you must discontinue use of our website immediately.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Prints Basket operates as an independent online retailer. All purchases made through our website are subject to the terms outlined below.
              </p>
            </div>
          </div>

          {/* 2. Definitions and Interpretation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Definitions and Interpretation</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              For clarity and consistency, the following definitions apply:
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>"Company"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong> refers to Prints Basket.</li>
                <li><strong>"User"</strong>, <strong>"Customer"</strong>, <strong>"you"</strong>, or <strong>"your"</strong> refers to any individual who accesses or uses our website or purchases products.</li>
                <li><strong>"Products"</strong> refers to printers, ink, toner, paper, and related accessories offered on our website.</li>
                <li><strong>"Services"</strong> refers to e-commerce features, customer support, order processing, and website functionality.</li>
                <li><strong>"Content"</strong> refers to all text, images, graphics, logos, product details, and other materials on our website.</li>
                <li><strong>"Personal Data"</strong> refers to information that identifies or can identify you personally.</li>
              </ul>
            </div>
          </div>

          {/* 3. Use of Website */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Use of Website</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You agree to use our website for lawful purposes only. By using our services, you confirm that you will:
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Comply with all applicable laws and these Terms & Conditions</li>
                <li>Provide accurate, complete, and truthful information during checkout or account registration</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the website in a way that does not disrupt its functionality or security</li>
                <li>Respect all intellectual property rights displayed on the site</li>
              </ul>
            </div>

            <div className="mt-4 bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Prohibited Activities</h3>
              <p className="text-gray-600 mb-3">You may not:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Engage in fraudulent, deceptive, or misleading activity</li>
                <li>Attempt to gain unauthorized access to our systems or data</li>
                <li>Upload or distribute harmful code, malware, or scripts</li>
                <li>Interfere with website operation or security</li>
                <li>Misuse product information or content displayed on the website</li>
              </ul>
            </div>
          </div>

          {/* 4. Product Information and Availability */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Product Information and Availability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We strive to provide accurate and up-to-date product information. However:
            </p>
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Product descriptions, specifications, images, and pricing may contain minor inaccuracies</li>
                <li>Availability depends on stock levels and supplier inventory</li>
                <li>Prices may change due to market conditions or promotional periods</li>
                <li>Manufacturers may update product packaging or specifications without notice</li>
                <li>Purchase quantities may be limited to prevent misuse or bulk purchasing</li>
              </ul>
            </div>
            <p className="text-gray-600 mt-4">
              We make reasonable efforts to ensure accuracy but cannot guarantee that all information is always complete or error-free.
            </p>
          </div>

          {/* 5. Orders and Payment */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Orders and Payment</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By placing an order with Prints Basket, you agree to the following:
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg p-4 border border-gray-200">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>All orders are subject to acceptance and product availability</li>
                <li>We may cancel or refuse an order for any reason, including suspected fraud or incorrect information</li>
                <li>Payments must be successfully processed before shipment</li>
                <li>You are responsible for providing accurate billing and shipping details</li>
                <li>Prices are displayed in the applicable regional currency (United States or Canada)</li>
                <li>Taxes, shipping charges, and fees may apply based on your location</li>
                <li>If an order is canceled after payment, a full refund will be issued.</li>
              </ul>
            </div>
          </div>

          {/* 6. Shipping and Delivery */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Shipping and Delivery</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We aim to deliver your order promptly; however:
            </p>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Delivery times are estimates and may vary due to location, carrier delays, or product availability</li>
                <li>Risk of loss transfers to the customer once the order is handed to the shipping carrier</li>
                <li>You are responsible for ensuring a safe and accessible delivery location</li>
                <li>Additional fees may apply for remote addresses or special delivery requirements</li>
                <li>International shipments (if applicable) may incur customs fees or import taxes</li>
                <li>Full shipping details are available in our Shipping Policy (if applicable).</li>
              </ul>
            </div>
          </div>

          {/* 7. Returns and Refunds */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Returns and Refunds</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Returns and exchanges are governed by our Return & Exchange Policy. Key terms include:
            </p>
            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Returns must be initiated within 30 days of delivery</li>
                <li>Items must be unopened and in original packaging unless defective</li>
                <li>Certain items may be non-returnable due to hygiene, safety, or customization</li>
                <li>Refunds are issued after inspection and processed to the original payment method</li>
                <li>Return shipping labels are provided for approved return requests</li>
              </ul>
            </div>
            <p className="text-gray-600 mt-4">
              Please refer to our full Return Policy for complete details.
            </p>
          </div>

          {/* 8. Intellectual Property Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Intellectual Property Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All website content—including images, product data, design elements, trademarks, and logos—belongs to Prints Basket or its respective owners.
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-gray-600 font-medium mb-3">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Copy, reproduce, or redistribute website content</li>
                <li>Use product images or text for unauthorized commercial purposes</li>
                <li>Claim ownership of logos or trademarks belonging to third-party manufacturers</li>
              </ul>
            </div>
            <p className="text-gray-600 mt-4">
              All trademarks displayed are owned by their respective trademark holders and used for identification purposes only.
            </p>
          </div>

          {/* 9. Limitation of Liability */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Limitation of Liability</h2>
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-gray-700 leading-relaxed">
                To the fullest extent permitted by law, Prints Basket is not liable for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-3">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of data, loss of profits, or business interruptions</li>
                <li>Damages arising from misuse of products or incorrect installation</li>
                <li>Delays caused by carriers, suppliers, or external service providers</li>
              </ul>
              <p className="text-gray-600 mt-3">
                Our total liability for any claim shall not exceed the amount you paid for the products purchased.
              </p>
            </div>
          </div>

          {/* 10. Governing Law */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Governing Law</h2>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-600 leading-relaxed mb-3">
                These Terms & Conditions are governed by the laws of:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>United States for U.S. customers</li>
                <li>Canada for Canadian customers</li>
              </ul>
              <p className="text-gray-600 mt-3">
                Any disputes shall be handled in the jurisdiction applicable to the customer's location.
              </p>
            </div>
          </div>

          {/* 11. Changes to These Terms */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">11. Changes to These Terms</h2>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-gray-600 leading-relaxed mb-2">
                Prints Basket reserves the right to modify or update these Terms & Conditions at any time. Revisions will be posted on this page with an updated Last Updated date.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Continued use of the website after any changes constitutes acceptance of the revised terms.
              </p>
            </div>
          </div>

          {/* 12. Contact Us */}
          <div className="space-y-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-semibold">12. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about these Terms & Conditions, please contact:
            </p>
            <div className="space-y-2 text-blue-50">
              <p>📧 <strong>Email:</strong> <a href="mailto:support@printsbasket.com" className="underline hover:text-white">support@printsbasket.com</a></p>
              <p>📍 <strong>Address:</strong> 95 Broadacre Dr, Kitchener, ON N2R 0S5, Canada</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
