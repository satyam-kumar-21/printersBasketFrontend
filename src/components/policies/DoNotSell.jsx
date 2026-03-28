import React from 'react';
import { Link } from 'react-router-dom';

const DoNotSell = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/20 min-h-screen py-8 sm:py-12 lg:py-16">
      {/* Background Patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 lg:space-y-12">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-slate-600 mb-4 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-700 font-bold">
              Home
            </Link>
            {' / '}
            <span className="text-slate-800 font-medium">Do Not Sell</span>
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Do Not Sell or Share
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900">My Personal Information</p>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto my-8"></div>
          <p className="text-slate-600 text-sm font-medium uppercase tracking-widest">CCPA/CPRA Notice</p>
          <p className="text-slate-700 mt-6 max-w-2xl mx-auto text-base leading-relaxed">Last Updated: January 21, 2026</p>
        </div>

        <div className="space-y-10">

          {/* Intro Statement */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <p className="text-slate-700 leading-relaxed font-medium text-sm sm:text-base lg:text-lg">
              This page is provided in accordance with the <strong>California Consumer Privacy Act (CCPA)</strong> and the <strong>California Privacy Rights Act (CPRA)</strong>. These laws give California residents the right to opt out of the sale or sharing of their personal information.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
              <p className="text-slate-900 font-black text-lg mb-2">✓ Prints Basket Respects Your Privacy</p>
              <ul className="space-y-3">
                <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-green-600 font-bold">•</span> We do NOT sell personal information</li>
                <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-green-600 font-bold">•</span> We do NOT share personal information for cross-context behavioral advertising</li>
                <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-green-600 font-bold">•</span> In compliance with California law, you may submit an opt-out request using the instructions below</li>
              </ul>
            </div>
          </div>

          {/* Your CCPA/CPRA Rights */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Your CCPA/CPRA Rights</h2>
            <p className="text-slate-700 leading-relaxed font-medium">As a California resident, you have the right to:</p>
            <ul className="space-y-3 ml-4">
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Opt out of the sale or sharing of your personal information</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Know what personal information we collect, use, or disclose</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Request deletion of your personal information (with legal exceptions)</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Correct inaccurate personal information</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Limit the use of sensitive personal information</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Non-discrimination for exercising your rights</li>
            </ul>
            <p className="text-sm text-slate-600 italic mt-4">These rights may be exercised at any time.</p>
          </div>

          {/* Our Policy on Selling or Sharing Data */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Our Policy on Selling or Sharing Data</h2>
            <p className="text-slate-700 leading-relaxed font-medium">Prints Basket:</p>
            <ul className="space-y-3 ml-4">
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-red-600 font-bold">✘</span> Does NOT sell personal information to third parties</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-red-600 font-bold">✘</span> Does NOT share personal information for advertising, remarketing, retargeting, or profiling</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-red-600 font-bold">✘</span> Does NOT allow third-party advertising cookies or trackers on our website</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> ONLY uses essential cookies needed for checkout, security, and performance</li>
            </ul>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border-2 border-blue-100 mt-6">
              <p className="text-slate-700 text-sm font-medium">All data collected is used strictly for order fulfillment, fraud prevention, and essential customer support, as outlined in our Privacy Policy.</p>
            </div>
          </div>

          {/* How to Submit a Request */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">How to Submit a Request</h2>
            <p className="text-slate-700 leading-relaxed font-medium">You may submit an opt-out or data request using the methods below.</p>

            <div className="space-y-4 mt-6">
              <h3 className="text-xl font-black text-slate-900 mb-4">Opt-Out Request Form</h3>
              <p className="text-slate-700 font-medium">Include the following information:</p>
              <ul className="space-y-2 ml-4">
                <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600">•</span> Full name</li>
                <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600">•</span> Email address</li>
                <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600">•</span> Order number (optional)</li>
                <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600">•</span> Type of request (Opt-Out, Delete Data, Access Data, Correct Data)</li>
              </ul>

              <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-4 border-2 border-blue-200 mt-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-black text-slate-900">Email us with subject line:</p>
                    <p className="text-slate-700 font-medium mb-2">"CCPA Opt-Out Request"</p>
                    <a href="mailto:support@printsbasket.com" className="text-blue-600 hover:text-blue-700 font-bold">support@printsbasket.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Process */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Verification Process</h2>
            <p className="text-slate-700 leading-relaxed font-medium">To protect your data, we may verify your identity by asking for:</p>
            <ul className="space-y-3 ml-4">
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">1.</span> Email confirmation</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">2.</span> Order details</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">3.</span> Basic account information</li>
            </ul>
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4 border-2 border-slate-200 mt-6">
              <p className="text-slate-700 font-medium">We will respond to all verified requests within <strong>45 days</strong> as required by California law.</p>
            </div>
          </div>

          {/* Categories of Personal Information */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Categories of Personal Information We Collect</h2>
            <p className="text-slate-700 leading-relaxed font-medium">We collect limited information necessary for e-commerce operations, including:</p>
            <ul className="space-y-2 ml-4">
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Contact information (name, email, phone)</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Shipping and billing addresses</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Order details and purchase history</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Customer support communications</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Essential cookie/session data</li>
            </ul>
            <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-2xl p-4 border-2 border-amber-200 mt-6">
              <p className="text-slate-700 font-medium"><strong>Note:</strong> We do not collect or share sensitive information for advertising purposes. All information is used only for order processing, fraud prevention, and customer support.</p>
            </div>
          </div>

          {/* No Selling or Sharing */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">No Selling or Sharing of Personal Information</h2>
            <p className="text-slate-700 leading-relaxed font-medium">In the previous 12 months, Prints Basket has:</p>
            <ul className="space-y-2 ml-4">
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> NOT sold personal information</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> NOT shared personal information for cross-context behavioral advertising</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> NOT transferred personal information to third parties except trusted service providers (e.g., payment processors, shipping carriers)</li>
            </ul>
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-4 border-2 border-emerald-200 mt-6">
              <p className="text-slate-700 font-medium">All third-party service providers are contractually required to use data only for essential business purposes.</p>
            </div>
          </div>

          {/* Cookies & Tracking Technologies */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Cookies & Tracking Technologies</h2>
            <p className="text-slate-700 leading-relaxed font-medium">Prints Basket does not use:</p>
            <ul className="space-y-2 ml-4">
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-red-600 font-bold">✘</span> Analytics pixels</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-red-600 font-bold">✘</span> Advertising cookies</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-red-600 font-bold">✘</span> Third-party social tracking</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-red-600 font-bold">✘</span> Behavioral advertising tools</li>
            </ul>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border-2 border-blue-200 mt-6">
              <p className="text-slate-700 font-medium"><strong>We only use strictly necessary cookies</strong> essential for cart functionality, login, checkout, and security.</p>
            </div>
          </div>

          {/* Authorized Agents */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Authorized Agents</h2>
            <p className="text-slate-700 leading-relaxed font-medium">You may designate an authorized agent to submit a CCPA request on your behalf. We may require written authorization or identity verification to protect your data.</p>
          </div>

          {/* Non-Discrimination Statement */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Non-Discrimination Statement</h2>
            <p className="text-slate-700 leading-relaxed font-medium">Prints Basket will not:</p>
            <ul className="space-y-2 ml-4">
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Deny goods or services</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Charge different prices</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Offer different service levels</li>
              <li className="text-slate-700 font-medium flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Retaliate in any way</li>
            </ul>
            <p className="text-slate-700 font-medium mt-4">...for exercising your privacy rights under the CCPA/CPRA.</p>
          </div>

          {/* Contact Us */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg shadow-blue-100/30 border-2 border-blue-200 space-y-6 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Questions or Concerns?</h2>
            <p className="text-slate-700 leading-relaxed font-medium">For questions about your privacy rights or this CCPA Notice, please reach out:</p>

            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">📧</span>
                <div>
                  <p className="font-black text-slate-900 mb-1">Email</p>
                  <a href="mailto:support@printsbasket.com" className="text-blue-600 hover:text-blue-700 font-bold">support@printsbasket.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">📍</span>
                <div>
                  <p className="font-black text-slate-900 mb-1">Address</p>
                  <p className="text-slate-700 font-medium">95 Broadacre Dr, Kitchener, ON N2R 0S5, Canada</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoNotSell;
