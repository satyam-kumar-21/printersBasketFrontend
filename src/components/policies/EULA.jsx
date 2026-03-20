import React from 'react';
import { Link } from 'react-router-dom';

const EULA = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-gray-600 mb-2">
            <Link to="/" className="text-orange-600 hover:text-orange-700 font-medium">
              Home
            </Link>
            {' / '}
            <span className="text-gray-800 font-medium">End User License Agreement</span>
          </p>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600 mb-4">
            End User License Agreement (EULA)
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4">Last Updated: January 21, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 space-y-8">
          
          {/* Intro */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              This End User License Agreement ("Agreement") governs your access to and use of the Prints Basket website and related online services ("Platform"). By accessing or using the Platform, you acknowledge and agree to be bound by this Agreement. If you do not agree to these terms, you must discontinue use immediately.
            </p>
          </section>

          {/* License Grant */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              License Grant
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Prints Basket grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Platform for personal or authorized business purposes in accordance with this Agreement and applicable laws.
              </p>
              <p>
                You may not sublicense or transfer your access rights to another individual or entity without written permission from Prints Basket.
              </p>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              User Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">By using the Platform, you agree to:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Use the Platform only for lawful purposes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Provide accurate, truthful, and complete account or order information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Keep your login credentials confidential</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Not attempt to breach, reverse-engineer, or modify the Platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Not upload harmful, fraudulent, or malicious content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Not interfere with the operation, security, or performance of the Platform</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">You are solely responsible for activities conducted under your account.</p>
          </section>

          {/* Prohibited Activities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              Prohibited Activities
            </h2>
            <p className="text-gray-700 mb-4">You agree NOT to:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✕</span>
                <span>Copy, duplicate, modify, distribute, or share any Platform content without authorization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✕</span>
                <span>Circumvent or disable security features</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✕</span>
                <span>Use bots, scrapers, crawlers, automated tools, or hacking methods</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✕</span>
                <span>Post or transmit harmful code, malware, or disruptive materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✕</span>
                <span>Infringe upon intellectual property rights of Prints Basket or third parties</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✕</span>
                <span>Misuse the Platform for fraudulent, deceptive, or harmful purposes</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 text-sm bg-red-50 border border-red-200 rounded-lg p-4">
              <strong>Warning:</strong> Violation of this section may result in immediate suspension or legal action.
            </p>
          </section>

          {/* Ownership & Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              Ownership & Intellectual Property
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                All content on the Platform—including text, images, graphics, product data, trademarks, logos, software, and design elements—is the intellectual property of Prints Basket or its licensors.
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>You do not acquire ownership rights to any part of the Platform by using it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>Unauthorized reproduction or distribution is strictly prohibited</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                All third-party trademarks (HP, Canon, Epson, Brother, etc.) belong to their respective owners and are used solely for identification and comparison purposes.
              </p>
            </div>
          </section>

          {/* Suspension & Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              Suspension & Termination of Access
            </h2>
            <p className="text-gray-700 mb-4">Prints Basket reserves the right to suspend or terminate access to the Platform without notice if:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>You violate this Agreement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Fraudulent, harmful, or suspicious activity is detected</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>Required by law, regulation, or government request</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>The Platform undergoes maintenance or discontinuation</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">Upon termination, your license to use the Platform immediately ends.</p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">To the maximum extent permitted by law, Prints Basket is not liable for:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-600 font-bold">•</span>
                <span>Indirect, incidental, special, or consequential damages</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-600 font-bold">•</span>
                <span>Loss of profits, data, revenue, or business opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-600 font-bold">•</span>
                <span>Interruptions, delays, or errors beyond our control</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-600 font-bold">•</span>
                <span>Damages resulting from misuse of products or information</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 text-sm bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              Our total liability to you will not exceed the amount paid for the product or service purchased through the Platform.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 mb-4">
              The Platform is provided on an "as-is" and "as-available" basis. Prints Basket makes no warranties, express or implied, regarding:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-600 font-bold">•</span>
                <span>Continuous or error-free operation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-600 font-bold">•</span>
                <span>Compatibility with all devices or browsers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-600 font-bold">•</span>
                <span>Accuracy or reliability of platform content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-600 font-bold">•</span>
                <span>Interruption-free access</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 font-semibold">You use the Platform at your own risk.</p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              Governing Law
            </h2>
            <p className="text-gray-700 mb-4">This Agreement is governed by the laws of:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">📍</span>
                <span>United States (for U.S. customers)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">📍</span>
                <span>Canada (for Canadian customers)</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">Any disputes arising from this Agreement will be handled in the courts of the applicable jurisdiction.</p>
          </section>

          {/* Changes to This Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              Changes to This Agreement
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Prints Basket may update or modify this EULA at any time. Updates become effective upon posting. Continued use of the Platform means you accept the updated terms.
              </p>
              <p>We encourage users to review this Agreement periodically.</p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-6 border border-orange-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">If you have questions or concerns regarding this Agreement, please contact us:</p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:support@printsbasket.com" className="text-orange-600 hover:text-orange-700 font-medium">
                    support@printsbasket.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg mt-1">📍</span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p>95 Broadacre Dr, Kitchener, ON N2R 0S5, Canada</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default EULA;
