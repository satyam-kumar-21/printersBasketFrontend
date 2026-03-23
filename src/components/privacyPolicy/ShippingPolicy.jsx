import React from "react";
import { Link } from "react-router-dom";

const ShippingPolicy = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Breadcrumb Navigation */}
        <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Shipping Policy</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Shipping Policy
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
              At Prints Basket, we aim to provide clear, reliable, and timely shipping services for all customers in the United States and Canada. This Shipping Policy explains how orders are processed, shipped, delivered, and handled to ensure transparency and a smooth shopping experience.
            </p>
          </div>

          {/* 1. Order Processing Time */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Order Processing Time</h2>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Orders are typically processed within <strong>1–2 business days</strong> after payment is confirmed.</li>
                <li>Orders placed on weekends or holidays are processed on the next business day.</li>
                <li>Processing times may vary due to product availability or high order volume.</li>
              </ul>
              <p className="text-gray-600 mt-3">
                You will receive an <strong>order confirmation email</strong> after checkout and a <strong>shipping confirmation email</strong> once your order has been dispatched.
              </p>
            </div>
          </div>

          {/* 2. Shipping Regions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Shipping Regions</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Prints Basket currently ships to:
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🇺🇸 United States</h3>
                <p className="text-gray-600">
                  All U.S. states and territories, except restricted areas noted below.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🇨🇦 Canada</h3>
                <p className="text-gray-600">
                  All Canadian provinces and territories.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Shipping Methods & Estimated Delivery Times */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Shipping Methods & Estimated Delivery Times</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Delivery times vary by location and carrier availability. Estimated timeframes:
            </p>
            <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
              <table className="w-full">
                <thead className="bg-blue-100 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Location</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Standard Shipping</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Expedited Shipping</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-gray-600 font-medium">United States</td>
                    <td className="px-4 py-3 text-gray-600">3–7 business days</td>
                    <td className="px-4 py-3 text-gray-600">2–4 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600 font-medium">Canada</td>
                    <td className="px-4 py-3 text-gray-600">3–8 business days</td>
                    <td className="px-4 py-3 text-gray-600">2–5 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500 mt-4">
              <p className="text-gray-700 font-medium mb-2">Important:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Delivery dates are estimates and not guaranteed.</li>
                <li>Remote or rural areas may require additional delivery time.</li>
                <li>Severe weather, carrier delays, or unforeseen circumstances may impact delivery schedules.</li>
              </ul>
            </div>
          </div>

          {/* 4. Shipping Costs */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Shipping Costs</h2>
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-gray-600 leading-relaxed mb-3">
                Shipping rates are calculated at checkout based on:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
                <li>Delivery address</li>
                <li>Package weight and size</li>
                <li>Selected shipping method</li>
              </ul>
              <p className="text-gray-600">
                Occasional promotional free shipping offers may apply depending on campaigns or order value.
              </p>
            </div>
          </div>

          {/* 5. Tracking Your Order */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Tracking Your Order</h2>
            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Once your order ships, you will receive a <strong>tracking number via email</strong>.</li>
                <li>You may track your shipment through the <strong>carrier's website</strong>.</li>
              </ul>
              <p className="text-gray-600 mt-3 text-sm italic">
                If tracking information is delayed or unavailable, please allow up to 24 hours for carrier systems to update.
              </p>
            </div>
          </div>

          {/* 6. Delivery Conditions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Delivery Conditions</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Please ensure your shipping address is accurate and complete. Prints Basket is not responsible for:
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Failed deliveries due to incorrect or incomplete addresses</li>
                <li>Packages lost due to address errors provided by the customer</li>
                <li>Delays caused by carriers, customs, or external factors</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
              <p className="text-gray-600">
                If a package is returned to us due to an incorrect address, <strong>additional shipping fees may apply</strong> for re-shipment.
              </p>
            </div>
          </div>

          {/* 7. Restricted Shipping Locations */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Restricted Shipping Locations</h2>
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
              <p className="text-gray-600 leading-relaxed mb-3">
                We do not ship to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>P.O. Boxes (in some regions, depending on the carrier)</li>
                <li>APO/FPO/DPO military addresses</li>
                <li>Locations with carrier restrictions or limited service</li>
              </ul>
              <p className="text-gray-600 mt-3">
                If a shipping address falls outside our service area, we will notify you before processing the order.
              </p>
            </div>
          </div>

          {/* 8. Damaged, Missing, or Incorrect Items */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Damaged, Missing, or Incorrect Items</h2>
            <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
              <p className="text-gray-600 leading-relaxed mb-3">
                If your order arrives:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
                <li>Damaged</li>
                <li>Incomplete</li>
                <li>With the wrong item shipped</li>
              </ul>
              <p className="text-gray-600 font-medium mb-2">Please contact us within 48 hours of delivery at:</p>
              <p className="text-gray-600">📧 <a href="mailto:support@printsbasket.com" className="text-blue-600 underline">support@printsbasket.com</a></p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 font-medium mb-2">Include:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Order number</li>
                <li>Photos of the item and packaging</li>
                <li>Description of the issue</li>
              </ul>
              <p className="text-gray-600 mt-3">
                We will work quickly to provide a replacement or solution.
              </p>
            </div>
          </div>

          {/* 9. Customs, Duties & Taxes */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Customs, Duties & Taxes (For Canada and Cross-Border Shipments)</h2>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
              <p className="text-gray-600 leading-relaxed mb-3">
                For Canadian shipments:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Orders may be subject to <strong>customs duties, taxes, or import fees</strong></li>
                <li>Customers are responsible for paying these charges</li>
                <li>Customs processing may cause additional delivery delays</li>
              </ul>
              <p className="text-gray-600 mt-3">
                Prints Basket follows all applicable trade and customs regulations.
              </p>
            </div>
          </div>

          {/* 10. Lost or Stolen Packages */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Lost or Stolen Packages</h2>
            <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
              <p className="text-gray-600 leading-relaxed mb-3">
                If tracking shows your order as delivered but you did not receive it:
              </p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Check with household members or neighbors</li>
                <li>Wait 24 hours (carriers sometimes mark packages early)</li>
                <li>Contact the carrier directly</li>
                <li>If unresolved, contact our support team</li>
              </ol>
              <p className="text-gray-600 mt-3">
                We will assist in determining the next steps.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-gray-600">
                <strong>Please note:</strong> Reimbursement or replacement depends on the carrier's investigation and policies.
              </p>
            </div>
          </div>

          {/* 11. Order Cancellations */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">11. Order Cancellations</h2>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Orders can be canceled <strong>only if they have not yet shipped</strong>.</li>
                <li>Once a package has been dispatched, cancellations cannot be processed.</li>
                <li>You may return the item after receiving it by following our <Link to="/refund-return-policy" className="text-blue-600 underline hover:text-blue-700">Return & Refund Policy</Link>.</li>
              </ul>
            </div>
          </div>

          {/* 12. Contact Us */}
          <div className="space-y-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about shipping, delivery, or order status, we are here to help.
            </p>
            <div className="space-y-2 text-blue-50">
              <p>📧 <strong>Email:</strong> <a href="mailto:support@printsbasket.com" className="underline hover:text-white">support@printsbasket.com</a></p>
              <p>🌐 <strong>Website:</strong> <a href="https://www.printsbasket.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.printsbasket.com</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShippingPolicy;
