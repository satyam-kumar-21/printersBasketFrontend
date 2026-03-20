import React from "react";
import { Link } from "react-router-dom";

const RefundReturnPolicy = () => {
  return (
    <section className="w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Breadcrumb Navigation */}
        <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-orange-600 transition">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Refund Policy</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            Refund Policy
          </h1>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Last Updated: January 21, 2026
          </p>
        </div>

        <div className="space-y-10">

          {/* Introduction */}
          <div className="space-y-4 bg-white rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
            <p className="text-gray-700 leading-relaxed text-lg">
              Your satisfaction matters to us. Prints Basket offers a transparent and customer-friendly return and refund process designed to protect your rights and ensure a smooth shopping experience.
            </p>
          </div>

          {/* 1. 30-Day Return Window */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. 30-Day Return Window</h2>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-600 leading-relaxed">
                Eligible items may be returned within 30 days of delivery. Returns outside this timeframe cannot be accepted unless required by local consumer protection laws.
              </p>
            </div>
          </div>

          {/* 2. Original Condition Requirement */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Original Condition Requirement</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Returned products must be:
            </p>
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Unused and undamaged</li>
                <li>In their original packaging</li>
                <li>Complete with manuals, accessories, and all included components</li>
              </ul>
            </div>
            <p className="text-gray-600 mt-4">
              Defective items may be returned even if opened, subject to inspection.
            </p>
          </div>

          {/* 3. Full Refund After Inspection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Full Refund After Inspection</h2>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-600 leading-relaxed">
                Refunds are issued to the original payment method once the returned item is received and approved. Refund processing typically takes <strong>3–5 business days</strong> after inspection.
              </p>
            </div>
          </div>

          {/* 4. Return Eligibility */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Return Eligibility</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We stand behind the quality of our products. Items may be returned under the following conditions:
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">✓ Returnable Items</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Unused and unopened printers</li>
                  <li>Sealed ink or toner cartridges</li>
                  <li>Accessories in original condition</li>
                  <li>Defective or malfunctioning products</li>
                  <li>Items sent in error</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">✗ Non-Returnable Items</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Opened or partially used ink/toner (unless defective)</li>
                  <li>Items damaged by the customer</li>
                  <li>Products returned without original packaging</li>
                  <li>Customized or special-order items</li>
                  <li>Items returned after 30 days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. How to Return Items */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. How to Return Items</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 1: Submit a Return Request</h3>
                <p className="text-gray-600 mb-2">Email us at <a href="mailto:support@printsbasket.com" className="text-orange-600 underline">support@printsbasket.com</a> and include:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Order number and purchase date</li>
                  <li>Product name and condition</li>
                  <li>Reason for return (defective, wrong item, unwanted, etc.)</li>
                  <li>Preferred resolution (refund or exchange)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 2: Receive Authorization</h3>
                <p className="text-gray-600 mb-2">If eligible, you will receive:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>A Return Merchandise Authorization (RMA) number</li>
                  <li>A prepaid return shipping label for qualifying returns</li>
                  <li>Return instructions</li>
                </ul>
                <p className="text-gray-600 mt-2 text-sm italic">Authorization is required before sending any items back.</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 3: Prepare and Ship the Item</h3>
                <p className="text-gray-600 mb-2">Please:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Pack the product securely to avoid damage</li>
                  <li>Include the original packaging, manuals, and accessories</li>
                  <li>Display the RMA number clearly on the package</li>
                  <li>Include the order receipt inside the box</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 4: Inspection & Refund</h3>
                <p className="text-gray-600 mb-2">Once your return arrives:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>We inspect the item within 2 business days</li>
                  <li>Approved refunds are issued within 3–5 business days</li>
                  <li>Refunds are sent to the original payment method</li>
                  <li>If the item is defective or incorrect, original shipping costs may also be refunded.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Refund Types & Processing Times */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Refund Types & Processing Times</h2>
            <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
              <table className="w-full">
                <thead className="bg-orange-100 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Payment Method</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Refund Timeframe</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-gray-600">Credit Card</td>
                    <td className="px-4 py-3 text-gray-600">3–5 business days</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">May take 1–2 billing cycles to appear</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-gray-600">Debit Card</td>
                    <td className="px-4 py-3 text-gray-600">3–5 business days</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">Reflected directly in bank account</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600">PayPal</td>
                    <td className="px-4 py-3 text-gray-600">1–3 business days</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">Usually the fastest option</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm mt-3">
              <strong>Note:</strong> Processing times may vary depending on your bank.
            </p>
          </div>

          {/* 7. Return Shipping */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Return Shipping</h2>
            
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">✓ Return Shipping Covered by Prints Basket</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Defective or damaged items</li>
                  <li>Wrong item received</li>
                  <li>Orders valued at $100 or more</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">⚠ Return Shipping Paid by Customer</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Change-of-mind returns</li>
                  <li>Non-defective items</li>
                  <li>Orders below $100</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Estimated Return Shipping Costs:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Small items: $8.99</li>
                  <li>Printers: $15.99 (average)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 8. Exchanges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Exchanges</h2>
            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <p className="text-gray-600 leading-relaxed mb-3">
                We currently prioritize refunds over direct exchanges for faster processing.
              </p>
              <p className="text-gray-700 font-medium mb-2">To exchange an item:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1">
                <li>Return the original item under our return guidelines</li>
                <li>Place a new order for the preferred product</li>
              </ol>
              <p className="text-gray-600 mt-3 text-sm">
                This ensures accurate availability and faster delivery of your replacement item.
              </p>
            </div>
          </div>

          {/* 9. Damaged or Defective Items */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Damaged or Defective Items</h2>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-gray-600 leading-relaxed mb-3">
                If your order arrives damaged or defective:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Contact us within 48 hours of delivery</li>
                <li>Provide photos of the damage (product + packaging)</li>
                <li>We will expedite a resolution—replacement or refund</li>
              </ul>
              <p className="text-gray-600 mt-3 font-medium">
                There are no restocking fees for defective items or errors on our part.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200 mt-3">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Manufacturer Defects</h3>
              <p className="text-gray-600">
                If a product has a manufacturer defect covered by warranty, we can assist in determining the best solution, including warranty claim support.
              </p>
            </div>
          </div>

          {/* 10. Order Cancellations */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Order Cancellations</h2>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-600 leading-relaxed mb-3">
                You may cancel your order before it ships:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Contact us as soon as possible</li>
                <li>Provide your order number and request</li>
                <li>Most orders are processed within 2–4 hours</li>
              </ul>
              <p className="text-gray-600 mt-3">
                If the order has already shipped, the standard return process applies.
              </p>
            </div>
          </div>

          {/* 11. International Returns */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">11. International Returns</h2>
            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>30-day return window</li>
                <li>Customer is responsible for return shipping</li>
                <li>Customs duties or import taxes are non-refundable</li>
                <li>Refunds issued in original currency</li>
                <li>Additional processing time of 5–10 business days may apply</li>
              </ul>
            </div>
          </div>

          {/* 12. Need Help */}
          <div className="space-y-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-semibold">Need Help With a Return?</h2>
            <p className="leading-relaxed">
              We're here to assist you with any return or refund questions.
            </p>
            <div className="space-y-2 text-orange-50">
              <p>📧 <strong>Email:</strong> <a href="mailto:support@printsbasket.com" className="underline hover:text-white">support@printsbasket.com</a></p>
              <p>💬 <strong>Live Chat:</strong> Available on <a href="https://www.printsbasket.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.printsbasket.com</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RefundReturnPolicy;
