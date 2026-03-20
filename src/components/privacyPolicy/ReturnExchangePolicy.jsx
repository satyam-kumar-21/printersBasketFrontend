import React from "react";
import ReturnExchangeForm from "./ReturnExchangeForm";

const ReturnExchangePolicy = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/20 min-h-screen py-16">
      {/* Background Patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-3">
            Return & Exchange Policy – Prints Basket
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mx-auto mb-8"></div>
        </div>

        <div className="space-y-10">

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm text-center">
              <div className="text-4xl">📅</div>
              <h3 className="text-xl font-black text-slate-900">30-Day Return Window</h3>
              <p className="text-slate-700 text-sm leading-relaxed">You may return eligible items within 30 days of the delivery date, provided they meet the return guidelines.</p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm text-center">
              <div className="text-4xl">🎁</div>
              <h3 className="text-xl font-black text-slate-900">Prepaid Return Shipping</h3>
              <p className="text-slate-700 text-sm leading-relaxed">For approved returns, Prints Basket provides prepaid return labels to make the return process simple and convenient.</p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm text-center">
              <div className="text-4xl">⚡</div>
              <h3 className="text-xl font-black text-slate-900">Fast Refund Processing</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Once your return is received and inspected, refunds are issued within 3–5 business days to your original payment method.</p>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter mb-8">Start a Return or Exchange</h2>
            <ReturnExchangeForm />
          </div>

          {/* Return Guidelines */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 md:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-8 backdrop-blur-sm">
            <h2 className="text-3xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Return Guidelines</h2>

            {/* Eligible Items */}
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-4">✔ Eligible Items</h3>
              <p className="text-slate-700 leading-relaxed mb-3 font-medium">The following products may be returned if they are unopened, unused, and in their original packaging:</p>
              <ul className="space-y-2 ml-4">
                <li className="text-slate-700 flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> Printers</li>
                <li className="text-slate-700 flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> Ink cartridges</li>
                <li className="text-slate-700 flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> Toner cartridges</li>
                <li className="text-slate-700 flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> Paper packs</li>
                <li className="text-slate-700 flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> Printing accessories (if unopened)</li>
              </ul>
            </div>

            {/* Special Conditions */}
            <div className="border-t-2 border-slate-100 pt-8">
              <h3 className="text-xl font-black text-slate-900 mb-4">⚙️ Special Conditions</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-black text-slate-900 mb-2">Defective Items:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="text-slate-700 text-sm flex items-start gap-2"><span className="text-blue-600">•</span> Unopened items found to be defective may be returned within the 30-day window.</li>
                    <li className="text-slate-700 text-sm flex items-start gap-2"><span className="text-blue-600">•</span> Opened ink or toner cartridges are only eligible for return if they are defective.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-black text-slate-900 mb-2">Non-Returnable Items:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="text-slate-700 text-sm flex items-start gap-2"><span className="text-red-600">•</span> Used or partially used ink/toner cartridges (unless defective)</li>
                    <li className="text-slate-700 text-sm flex items-start gap-2"><span className="text-red-600">•</span> Downloadable digital products</li>
                    <li className="text-slate-700 text-sm flex items-start gap-2"><span className="text-red-600">•</span> Custom or special-order items</li>
                    <li className="text-slate-700 text-sm flex items-start gap-2"><span className="text-red-600">•</span> Items not returned in original packaging</li>
                  </ul>
                </div>
                <div>
                  <p className="font-black text-slate-900 mb-2">Final Sale Products:</p>
                  <p className="text-slate-700 text-sm ml-4">Certain clearance and promotional items may be marked as final sale and cannot be returned.</p>
                </div>
              </div>
            </div>

            {/* Packaging Requirements */}
            <div className="border-t-2 border-slate-100 pt-8">
              <h3 className="text-xl font-black text-slate-900 mb-4">📦 Packaging Requirements</h3>
              <p className="text-slate-700 leading-relaxed mb-4 font-medium">To ensure safe transit and successful inspection:</p>
              <ul className="space-y-2 ml-4">
                <li className="text-slate-700 flex items-start gap-2"><span className="text-orange-600 font-bold">✓</span> Items must be returned in their original box, with all accessories, manuals, and protective materials.</li>
                <li className="text-slate-700 flex items-start gap-2"><span className="text-orange-600 font-bold">✓</span> Products must be packaged securely to avoid damage during shipping.</li>
              </ul>
            </div>
          </div>

          {/* Exchange Policy */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 md:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-3xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Exchange Policy</h2>
            
            <p className="text-slate-700 leading-relaxed font-medium">If you received the wrong item or a defective product, we may offer an exchange for the same model (subject to availability). If the exact item is unavailable, a refund may be issued instead.</p>
          </div>

          {/* How Returns Work */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 md:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-3xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">How Returns Work</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-orange-600 flex-shrink-0">1</div>
                <p className="text-slate-700 font-medium pt-1">Submit a return request using your order number.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-blue-600 flex-shrink-0">2</div>
                <p className="text-slate-700 font-medium pt-1">Receive a prepaid return label after approval.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-slate-600 flex-shrink-0">3</div>
                <p className="text-slate-700 font-medium pt-1">Ship the product back in its original packaging.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-green-600 flex-shrink-0">4</div>
                <p className="text-slate-700 font-medium pt-1">Once inspected, your refund or exchange will be processed.</p>
              </div>
            </div>
          </div>

          {/* Need Help */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 md:p-10 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-6 backdrop-blur-sm">
            <h2 className="text-3xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Need Help?</h2>
            
            <p className="text-slate-700 leading-relaxed font-medium">If you need assistance with a return or have questions about eligibility, our support team is available via:</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <p className="font-black text-slate-900">Email:</p>
                  <a href="mailto:support@printsbasket.com" className="text-orange-600 hover:text-orange-700 font-bold transition-colors">support@printsbasket.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">💬</span>
                <div>
                  <p className="font-black text-slate-900">Live Chat:</p>
                  <p className="text-slate-700 text-sm">Available on <a href="https://www.printsbasket.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold">www.printsbasket.com</a></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReturnExchangePolicy;
