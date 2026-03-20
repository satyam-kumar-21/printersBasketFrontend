import React, { useState } from "react";
const heroImage = "/assets/printer.png";

const FAQContent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "What type of printer is suitable for home use?",
      a: "Inkjet printers are commonly preferred for home environments because they can handle everyday documents as well as photo printing with good quality."
    },
    {
      q: "Which printer is recommended for small offices?",
      a: "Laser printers are typically used in office settings since they offer faster printing speeds and efficient cost-per-page performance."
    },
    {
      q: "Do your printers support wireless or mobile printing?",
      a: "Many printers available on Prints Basket include wireless features such as Wi-Fi, AirPrint, and mobile app compatibility. Please check the product description for specific connectivity options."
    },
    {
      q: "What is duplex printing?",
      a: "Duplex printing allows a printer to automatically print on both sides of the paper. This feature helps reduce paper usage and can save time during large print jobs."
    },
    {
      q: "How do I know which ink or toner works with my printer?",
      a: "You can find the compatible ink or toner model in the product description or in your printer's user manual. Always check compatibility information before purchasing."
    },
    {
      q: "Are refillable ink tank printers cost-effective?",
      a: "Refillable ink tank printers can be economical for users who print frequently, as the refill bottles generally last longer compared to traditional cartridges."
    },
    {
      q: "How often should ink or toner be replaced?",
      a: "Replacement frequency depends on printing volume. Your printer will usually display a low-ink or low-toner notification, or you may notice a decline in print quality when supplies need replacing."
    },
    {
      q: "Are the printers easy to set up?",
      a: "Most printers include step-by-step setup instructions and support both USB and wireless installation. Additional setup details can be found in the product manual."
    },
    {
      q: "Can I set up a printer without using a computer?",
      a: "Yes, many printers support setup through a smartphone using the manufacturer’s mobile app. Features vary by model, so please refer to the product specifications."
    },
    {
      q: "How do I connect a printer to a wireless network?",
      a: "Navigate to the printer’s wireless or network settings, select your Wi-Fi network, and enter the password. Many modern printers also offer guided setup through their touchscreen interface or companion app."
    },
    {
      q: "Do you provide support for product issues?",
      a: "Prints Basket provides assistance for product inquiries, order updates, and general purchase-related questions. Product setup, troubleshooting, or repair services are not offered."
    },
    {
      q: "Where do your products ship from?",
      a: "Orders are fulfilled through authorized distribution partners within the United States and Canada. Delivery times vary based on product availability and location."
    },
    {
      q: "Are the products new and authentic?",
      a: "Yes. All products are sourced through authorized distributors and include standard manufacturer warranties where applicable."
    },
    {
      q: "Do you offer returns?",
      a: "Eligible unopened items may be returned within 30 days of delivery. Defective items may also be returned within the same period for inspection. Please refer to our Return Policy for full details."
    }
  ];

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img
              src={heroImage}
              alt="Prints Basket FAQ"
              className="w-full max-w-sm mx-auto h-40 object-cover rounded-lg shadow-md"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            FAQs – Prints Basket
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg">
            Find quick answers to common questions about our products, printers, setup, shipping, and more. If you need help, our team is here to assist you.
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="divide-y divide-gray-100">
            {faqData.map((faq, faqIndex) => {
              const isOpen = openIndex === faqIndex;
              return (
                <div key={faqIndex} className="p-4">
                  <button
                    onClick={() => toggleFAQ(faqIndex)}
                    className="w-full text-left flex justify-between items-center hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <h3 className="text-base font-medium text-gray-900 pr-4">
                      {faq.q}
                    </h3>
                    <span className={`transform transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-200 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600 mb-3">
            Still Need Help?
          </h3>
          <p className="text-gray-700 mb-4">
            Our support team is here to help with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-700">
            <div className="flex items-center">
              <span className="mr-2 text-lg">📧</span>
              <span className="font-medium">support@printsbasket.com</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-lg">🌐</span>
              <span className="font-medium">www.printsbasket.com</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQContent;