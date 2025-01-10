import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/logo2.png" alt="logo" className="w-20" />
            <p className="text-gray-400 text-sm">
              Transforming social media strategy with AI-powered analytics.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-purple-600">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link to={"/"} onClick={scrollToTop}>
                <button className="text-gray-400 hover:text-purple-600 transition-colors text-left">
                  Features
                </button>
              </Link>
              <Link to={"/"} onClick={scrollToTop}>
                <button className="text-gray-400 hover:text-purple-600 transition-colors text-left">
                  Team
                </button>
              </Link>

              <Link to={"/dashboard"} onClick={scrollToTop}>
                <button className="text-gray-400 hover:text-purple-600 transition-colors text-left">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-purple-600">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p>
                Email:{" "}
                <a
                  href="mailto:developxdave@gmail.com"
                  className="text-white hover:text-purple-600"
                >
                  support.socialsights@gmail.com
                </a>
              </p>
              <p>Location: Mumbai</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-purple-600">
              Stay Updated
            </h4>
            <p className="text-gray-400">Subscribe to our newsletter</p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-3 py-2 rounded-lg flex-grow focus:outline-none"
              />
              <button className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 SocialSights. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        <ArrowUp size={28} />
      </button>
    </footer>
  );
};

export default Footer;
