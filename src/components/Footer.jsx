import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import logo from "../../public/logo-bgremove.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-[#0b0b0b] to-[#3b1f00] text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* LOGO + DESC */}
        <div>
          <img
            src={logo}
            alt="Prints Basket"
            className="h-12 mb-4  rounded-md p-1"
          />

          <p className="text-gray-300 text-sm leading-relaxed">
            Prints Basket is built with simplicity in mind. From browsing to checkout,
            we aim to make every step user-friendly, secure, and efficient—so you can shop
            with confidence and peace of mind. Whether you're upgrading your workspace or
            restocking supplies, our goal is to help you find dependable printing solutions with ease.
          </p>
        </div>

        {/* POLICIES */}
        <div>
          <h3 className="font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</Link></li>
            <li><Link to="/return-exchange-policy" className="hover:text-white transition">Return & Exchange</Link></li>
            <li><Link to="/shipping-policy" className="hover:text-white transition">Shipping Policy</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-white transition">Cookie Policy</Link></li>
            <li><Link to="/refund-return-policy" className="hover:text-white transition">Refund Policy</Link></li>
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/shop" className="hover:text-white transition">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/disclaimer" className="hover:text-white transition">Disclaimer</Link></li>
             <li><Link to="/blogs" className="hover:text-white transition">Blogs</Link></li>
            {/* <li><Link to="/ccpa-privacy-policy" className="hover:text-white transition">CCPA Privacy</Link></li> */}
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link to="/track-order" className="hover:text-white transition">Track Your Order</Link></li>
            <li><Link to="/contact-us" className="hover:text-white transition">Customer Service</Link></li>
            {/* <li><Link to="/accessibility-statement" className="hover:text-white transition">Accessibility</Link></li> */}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Quick Contacts</h3>

          <div className="space-y-3 text-gray-300 text-sm">

            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <p>95 Broadacre Dr, Kitchener, ON N2R 0S5, Canada</p>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <p>support@printsbasket.com</p>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <p>+1 (888) 322-5251</p>
            </div>

            {/* SECURITY BADGE */}
            <div className="mt-4 bg-white text-black rounded-md px-3 py-2 inline-flex items-center gap-2 shadow">
              <span>🔒</span>
              <div>
                <p className="text-xs font-semibold">Site Encryption</p>
                <p className="text-xs">Verified</p>
              </div>
            </div>

            <p className="text-xs text-gray-400">
              Verified Date 03/19/2026
            </p>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-4 mt-12 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

        <p>PrintsBasket © 2026. All rights reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to="/do-not-sell" className="hover:text-white transition">
            Do Not Sell
          </Link>
          <Link to="/eula" className="hover:text-white transition">
            End User License Agreement
          </Link>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
