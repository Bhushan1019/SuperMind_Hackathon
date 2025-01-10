import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Rocket, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
    >
      {/* Hero Header */}
      <div className="bg-purple-600 text-white py-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Supercharge Your Social Media Presence
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover AI-powered tools to elevate your social media strategy and
          drive unparalleled engagement.
        </motion.p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-16">
        {/* Feature 1 */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg text-center border-t-4 border-purple-600 hover:shadow-xl transition-transform transform hover:-translate-y-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Rocket size={40} className="text-purple-600 mx-auto mb-4" />
          <h3 className="font-bold text-xl">AI-Driven Insights</h3>
          <p className="text-gray-600 mt-2">
            Get actionable recommendations to optimize your content strategy.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg text-center border-t-4 border-purple-600 hover:shadow-xl transition-transform transform hover:-translate-y-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Users size={40} className="text-purple-600 mx-auto mb-4" />
          <h3 className="font-bold text-xl">Collaborative Tools</h3>
          <p className="text-gray-600 mt-2">
            Work seamlessly with your team to create impactful campaigns.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg text-center border-t-4 border-purple-600 hover:shadow-xl transition-transform transform hover:-translate-y-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CheckCircle size={40} className="text-purple-600 mx-auto mb-4" />
          <h3 className="font-bold text-xl">Results-Driven Analytics</h3>
          <p className="text-gray-600 mt-2">
            Track your progress with detailed performance metrics.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-100 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700">
            Ready to Take the Next Step?
          </h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            Join hundreds of satisfied users leveraging AI to transform their
            social media strategy.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/dashboard"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700"
            >
              Get Started Now
            </Link>
            <Link
              to="/features"
              className="bg-white border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-2xl font-bold text-gray-800">
            What Our Users Are Saying
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <p className="text-gray-600 italic">
                  "This platform revolutionized our social media campaigns. The
                  analytics are spot-on!"
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={`https://picsum.photos/40/40?random=${i}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-purple-600"
                  />
                  <div className="ml-3">
                    <h5 className="font-bold text-gray-800">User {i + 1}</h5>
                    <span className="text-sm text-gray-500">
                      CEO, Example Corp
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
