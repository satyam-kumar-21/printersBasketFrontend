import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section className="w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Breadcrumb Navigation */}
        <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-orange-600 transition">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Privacy Policy</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Effective Date: February 23, 2026 • Last Updated: February 23, 2026
          </p>
        </div>

        <div className="space-y-10">

          {/* Introduction */}
          <div className="space-y-4 bg-white rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>Prints Basket</strong> ("we," "our," or "us") is committed to protecting your privacy and ensuring the responsible handling of your personal information. This Privacy Policy explains what data we collect, how we use it, how it is shared, and the rights available to you under applicable privacy laws in the United States and Canada, including standards required by Microsoft Advertising and Google Ads.
            </p>
          </div>

          {/* 1. Data Controller Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Data Controller Information</h2>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <p className="text-gray-700 space-y-2">
                <span className="block"><strong>Company:</strong> Prints Basket</span>
                <span className="block"><strong>Address:</strong> 95 Broadacre Dr, Kitchener, ON N2R 0S5, Canada</span>
                <span className="block"><strong>Contact:</strong> <a href="mailto:support@printsbasket.com" className="text-orange-600 underline hover:text-orange-700">support@printsbasket.com</a></span>
              </p>
              <p className="text-gray-600 mt-4 text-sm">
                We encourage you to read this Privacy Policy carefully to understand how your information is managed.
              </p>
            </div>
          </div>

          {/* 2. Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We only collect the information necessary to operate our online store, process orders, provide support, and maintain website security.
            </p>

            <div className="pl-4 space-y-4 border-l-4 border-orange-300">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">2.1 Personal Information You Provide</h3>
                <p className="text-gray-600 mt-2 mb-3">We may collect the following data when you interact with our website:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Order and transaction information</li>
                  <li>Account login details (if applicable)</li>
                  <li>Customer support messages</li>
                  <li>Communication preferences</li>
                </ul>
                <p className="text-gray-600 mt-3 text-sm">
                  <strong>Payment Information:</strong> We do not store full credit card details. Payments are processed securely through PCI DSS–compliant third-party payment processors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">2.2 Information Collected Automatically</h3>
                <p className="text-gray-600 mt-2 mb-3">When you browse our website, we may collect:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Essential system logs for security</li>
                  <li>Session information for cart and checkout</li>
                  <li>Basic device metrics (screen resolution, OS)</li>
                </ul>
                <p className="text-gray-600 mt-3 text-sm">
                  We do not use third-party analytics platforms or tracking scripts (such as Google Analytics, behavioral tracking, or advertising cookies).
                </p>
              </div>
            </div>
          </div>

          {/* 3. How We Use Your Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use collected information strictly for legitimate and operational purposes:
            </p>

            <div className="pl-4 space-y-3 border-l-4 border-blue-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">3.1 Essential E-Commerce Operations</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                  <li>Processing and fulfilling orders</li>
                  <li>Handling secure payments</li>
                  <li>Shipping and delivery coordination</li>
                  <li>Sending order confirmations and essential notifications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">3.2 Customer Service & Support</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                  <li>Responding to inquiries</li>
                  <li>Assisting with returns, exchanges, and product questions</li>
                  <li>Providing order-related updates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">3.3 Security, Fraud Prevention & Compliance</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                  <li>Protecting website integrity</li>
                  <li>Detecting suspicious or fraudulent activity</li>
                  <li>Meeting legal, regulatory, or tax obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">3.4 Website Performance & Improvement</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                  <li>Maintaining site functionality</li>
                  <li>Enhancing checkout and customer experience</li>
                  <li>Supporting essential features</li>
                </ul>
              </div>

              <p className="text-gray-600 mt-3 text-sm italic">
                <strong>Legal Basis:</strong> Contract fulfillment, legitimate business interest, legal compliance, and consent (where required).
              </p>
            </div>
          </div>

          {/* 4. Information Sharing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed font-medium text-lg mb-4">
              Prints Basket does not sell, rent, or trade your personal information. We only share data when necessary to operate our services.
            </p>

            <div className="space-y-4">
              <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">4.1 Trusted Service Providers</h3>
                <p className="text-gray-600 mb-3">Your data may be shared with vetted partners who support:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
                  <li>Payment processing</li>
                  <li>Order fulfillment</li>
                  <li>Shipping and logistics</li>
                  <li>Website hosting</li>
                  <li>Cybersecurity services</li>
                  <li>Customer support systems</li>
                </ul>
                <p className="text-gray-600 font-medium mb-2">These providers must:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Use your data only as instructed</li>
                  <li>Maintain strict confidentiality</li>
                  <li>Follow industry-standard security practices</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">4.2 Legal Obligations</h3>
                <p className="text-gray-600">We may disclose your information when legally required by:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                  <li>Government authorities</li>
                  <li>Court orders</li>
                  <li>Applicable regulations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">4.3 Business Transfers</h3>
                <p className="text-gray-600">
                  If Prints Basket undergoes a merger, acquisition, or restructuring, customer information may be transferred as part of the transaction. We will notify users if such changes occur.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">4.4 With Your Consent</h3>
                <p className="text-gray-600">
                  We may share information only when you provide explicit, informed consent for a specific purpose.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Cookies & Tracking Technologies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Cookies & Tracking Technologies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Prints Basket uses only essential cookies, including:
            </p>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 mb-4">
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Cart and checkout functionality cookies</li>
                <li>User preference cookies (language, region)</li>
                <li>Security and session cookies</li>
              </ul>
            </div>
            <p className="text-gray-600 font-medium mb-3">We do not use:</p>
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Advertising or behavioral tracking cookies</li>
                <li>Cross-site tracking technologies</li>
                <li>Third-party marketing pixels</li>
                <li>Analytics tools such as Google Analytics</li>
              </ul>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              You may disable cookies via your browser settings; however, essential features like checkout may not function correctly.
            </p>
          </div>

          {/* 6. Your Privacy Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Your Privacy Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Depending on your location, you may have rights under laws including CCPA/CPRA (California), PIPEDA (Canada), and other U.S. state privacy-laws.
            </p>
            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <p className="text-gray-700 font-medium mb-3">Your rights include:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Right to access personal data</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion (subject to legal retention)</li>
                <li>Right to restrict or object to certain processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent (where applicable)</li>
              </ul>
              <p className="text-gray-700 font-medium">To exercise any of these rights, contact:</p>
              <p className="text-gray-600 mt-2">
                📧 <a href="mailto:support@printsbasket.com" className="text-orange-600 underline">support@printsbasket.com</a>
              </p>
              <p className="text-gray-600 mt-3 text-sm">
                We respond to verified requests within 30 days.
              </p>
            </div>
          </div>

          {/* 7. Opt-Out Options */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Opt-Out Options</h2>
            
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Email Communications</h3>
              <p className="text-gray-600 mb-3">You may unsubscribe from non-essential emails by:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
                <li>Clicking "Unsubscribe" in any message</li>
                <li>Updating your account preferences</li>
                <li>Emailing us directly</li>
              </ul>
              <p className="text-gray-600 text-sm italic">
                Transactional emails (order confirmations, shipping updates) will still be sent when necessary.
              </p>
            </div>
          </div>

          {/* 8. Data Retention */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We retain personal information only for the time needed to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4">
              <li>Process and fulfill orders</li>
              <li>Maintain accounts</li>
              <li>Provide customer support</li>
              <li>Meet legal obligations</li>
              <li>Prevent fraud and misuse</li>
            </ul>
            <p className="text-gray-600 mt-4">
              When data is no longer required, it is securely deleted or anonymized.
            </p>
          </div>

          {/* 9. Data Security */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We apply industry-standard security safeguards to protect your information, including:
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4 border border-gray-200 mb-4">
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>HTTPS/TLS encryption</li>
                <li>Secure server environment</li>
                <li>Firewalls and intrusion monitoring</li>
                <li>Role-based access controls</li>
                <li>Regular security audits</li>
                <li>PCI DSS–compliant payment gateways</li>
              </ul>
            </div>
            <p className="text-gray-600 mb-3">
              No online system is 100% risk-free, but we take all reasonable measures to safeguard your data.
            </p>
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-gray-700 font-medium mb-2">Your Responsibilities:</p>
              <p className="text-gray-600 text-sm">
                Use strong passwords, protect your login details, and notify us of any suspicious activity.
              </p>
            </div>
          </div>

          {/* 10. Third-Party Links */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Our website may contain links to third-party sites. Prints Basket is not responsible for the privacy practices, content, or security of those external websites.
            </p>
            <p className="text-gray-600">
              We recommend reviewing their privacy policies before providing personal information.
            </p>
          </div>

          {/* 11. Children's Privacy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">11. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We do not knowingly collect personal information from children under age 13.
            </p>
            <p className="text-gray-600">
              If you believe a child has submitted information, contact us immediately so we can remove it.
            </p>
          </div>

          {/* 12. Changes to This Privacy Policy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this policy periodically to reflect changes in laws or our practices. Any updates will be posted on this page with a revised "Last Updated" date.
            </p>
          </div>

          {/* 13. Contact Us About Privacy */}
          <div className="space-y-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-semibold">13. Contact Us About Privacy</h2>
            <p className="leading-relaxed">
              If you have questions or want to exercise your rights, contact us:
            </p>
            <div className="space-y-2 text-orange-50">
              <p>📧 <strong>Email:</strong> <a href="mailto:support@printsbasket.com" className="underline hover:text-white">support@printsbasket.com</a></p>
              <p>📍 <strong>Address:</strong> 95 Broadacre Dr, Kitchener, ON N2R 0S5, Canada</p>
            </div>
            <p className="text-orange-100 mt-4">
              We will respond promptly and assist you with any privacy-related concerns.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;