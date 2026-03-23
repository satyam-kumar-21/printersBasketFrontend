import React from "react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Breadcrumb Navigation */}
        <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Cookie Policy</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Cookie Policy
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
              This Cookie Policy explains how Prints Basket ("we", "our", "us") uses cookies and similar technologies to operate, secure, and enhance our website and online services. By using our website, you acknowledge and agree to the use of cookies as described in this policy. You may control or disable cookies at any time through your browser settings.
            </p>
          </div>

          {/* 1. What Are Cookies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. What Are Cookies?</h2>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-600 leading-relaxed mb-3">
                Cookies are small text files stored on your device (computer, smartphone, or tablet) when you visit a website. They help websites function properly, remember basic preferences, and keep sessions secure.
              </p>
              <div className="bg-white rounded p-3 border border-blue-200">
                <p className="text-gray-700 font-medium text-sm mb-1">Important:</p>
                <p className="text-gray-600 text-sm">
                  Cookies do not store personal information such as your name or payment details unless you explicitly provide that information during checkout or account setup.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Types of Cookies We Use */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Types of Cookies We Use</h2>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 mb-4">
              <p className="text-gray-600 leading-relaxed">
                Prints Basket uses only <strong>essential and functional cookies</strong> required for safe operation of our website.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                We do <strong>not</strong> use advertising, tracking, analytics, or behavioral profiling cookies.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-blue-100 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Cookie Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Purpose</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Examples</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Consent?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-gray-600 font-medium">Strictly Necessary</td>
                    <td className="px-4 py-3 text-gray-600">Ensure website operates safely & supports e-commerce</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">Session identifiers, checkout auth, cart</td>
                    <td className="px-4 py-3 text-gray-600 font-medium text-green-600">No – Required</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600 font-medium">Functional</td>
                    <td className="px-4 py-3 text-gray-600">Remember user preferences for usability</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">Language, region preference</td>
                    <td className="px-4 py-3 text-gray-600 font-medium text-blue-600">Implied</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400 mt-4">
              <p className="text-gray-700 font-medium mb-2">We Do NOT Use:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Tracking or behavioral advertising cookies</li>
                <li>Third-party retargeting cookies</li>
                <li>Social media tracking pixels</li>
                <li>Analytics or data profiling tools</li>
              </ul>
            </div>
          </div>

          {/* 3. Why These Cookies Are Important */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Why These Cookies Are Important</h2>
            <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
              <p className="text-gray-600 leading-relaxed mb-3">
                Our essential cookies are required for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Saving your shopping cart, even if you leave the site temporarily</li>
                <li>Securing your login sessions and account information</li>
                <li>Processing orders and enabling encrypted checkout</li>
                <li>Remembering basic preferences (language, region)</li>
                <li>Maintaining overall site performance and reliability</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-gray-600">
                <strong>Important:</strong> Disabling these cookies may result in loss of key features such as cart storage, account access, and checkout functionality.
              </p>
            </div>
          </div>

          {/* 4. How to Control or Disable Cookies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. How to Control or Disable Cookies</h2>
            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <p className="text-gray-600 leading-relaxed mb-4">
                You can manage cookie preferences through your browser settings. Please note that disabling essential cookies may limit your ability to use certain features of our website.
              </p>
              <p className="text-gray-700 font-medium mb-3">Browser Instructions:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and Other Site Data</li>
                <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari (macOS/iOS):</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Microsoft Edge:</strong> Settings → Cookies and Site Permissions → Manage Cookies</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3 italic">
                You may delete existing cookies or block future cookies, but certain website functions may no longer work as intended.
              </p>
            </div>
          </div>

          {/* 5. Do We Use Third-Party Cookies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Do We Use Third-Party Cookies?</h2>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Currently, Prints Basket does <strong>not</strong> use any third-party advertising, analytics, or remarketing cookies.</li>
                <li>If future integrations (such as additional payment or chat tools) require third-party cookies, we will update this policy and clearly notify users.</li>
              </ul>
            </div>
          </div>

          {/* 6. Data Privacy and Cookies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Data Privacy and Cookies</h2>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-600 leading-relaxed">
                Any information collected through cookies—such as session identifiers or limited preference data—is processed according to our <Link to="/privacy-policy" className="text-blue-600 underline hover:text-blue-700">Privacy Policy</Link>. We do not use cookies to collect sensitive personal information.
              </p>
            </div>
          </div>

          {/* 7. Updates to This Cookie Policy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Updates to This Cookie Policy</h2>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in legal requirements or our website functionality. When updates occur, the "Last Updated" date at the top of this page will be revised. We encourage users to review this policy periodically.
              </p>
            </div>
          </div>

          {/* 8. Contact Us */}
          <div className="space-y-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-semibold">8. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about our Cookie Policy or how cookies are used on our website, please contact us:
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

export default CookiePolicy;
