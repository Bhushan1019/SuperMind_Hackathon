import React from "react";
import { motion } from "framer-motion";
import { BarChart2, Share2, Globe, LineChart, Target, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart2 size={32} />,
      title: "Real-time Analytics",
      description:
        "Track your social media performance in real-time with comprehensive analytics and insights. Make data-driven decisions instantly.",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach Analysis",
      description:
        "Understand your audience demographics and reach across different regions and platforms.",
    },
    {
      icon: <LineChart size={32} />,
      title: "Growth Tracking",
      description:
        "Monitor your follower growth, engagement rates, and content performance over time.",
    },
    {
      icon: <Target size={32} />,
      title: "Audience Insights",
      description:
        "Get detailed insights about your audience preferences, behaviors, and engagement patterns.",
    },
    {
      icon: <Share2 size={32} />,
      title: "GPT-powered Insights",
      description:
        "Leverage AI to generate content ideas, optimize posting times, and improve engagement.",
    },
    {
      icon: <Zap size={32} />,
      title: "Smart Automation",
      description:
        "Automate your social media workflow with intelligent scheduling and posting features.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your social media game with cutting-edge AI tools designed
            for success.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative bg-gradient-to-tr from-purple-100 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md text-purple-600 mb-6 mx-auto">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-700 text-center">{feature.description}</p>
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-300 to-purple-500 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
