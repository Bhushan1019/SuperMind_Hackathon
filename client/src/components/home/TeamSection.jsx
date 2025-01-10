import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, GraduationCap } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Bhushan Patil",
      role: "Mobile App Developer",
      image: "https://avatars.githubusercontent.com/u/121352274?v=4",
      graduationYear: "2025",
      college: "Sinhagad College, Lonavala",
      linkedin: "https://www.linkedin.com/in/bhushanpatil2226/",
      github: "https://github.com/Bhushan1019/",
    },
    {
      name: "Karan Wagh",
      role: "React Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQG6qbXoOtHw8A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729424318311?e=1741824000&v=beta&t=fyDYobwX7UiPwZj0ASt_mpa8eSGeEVbCSrAUEhk8zxk",
      graduationYear: "2025",
      college: "Thakur College",
      linkedin: "https://www.linkedin.com/in/waghkaran/",
      github: "https://github.com/karanwaghh/",
    },
    {
      name: "Vaishnavi Sirimalla",
      role: "React Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGuHSfi6wH7DQ/profile-displayphoto-shrink_400_400/B4DZPn1eaPHUAg-/0/1734761375957?e=1741824000&v=beta&t=gmMpWG9uBwHz51dswI6mKMMI4rFuLIlfhLZIk7sjvWc",
      graduationYear: "2025",
      college: "Thakur College",
      linkedin: "https://www.linkedin.com/in/vaishnavi-sirimalla-89351322b/",
      github: "https://github.com/VAISHNA1102",
    },
    {
      name: "Sanjay Sargam",
      role: "Mobile App Developer",
      image: "https://avatars.githubusercontent.com/u/65113071?v=4",
      graduationYear: "2025",
      college: "Thakur College",
      linkedin: "https://www.linkedin.com/in/sanjaysargam/",
      github: "https://github.com/SanjaySargam",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The creative minds behind SocialAnalytics, blending innovation,
            expertise, and teamwork.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-tr from-purple-100 via-white to-purple-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center group"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-purple-200 group-hover:ring-purple-300 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-purple-600 font-medium text-sm uppercase mb-3 tracking-wide">
                {member.role}
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                <GraduationCap size={18} className="text-purple-500" />
                <span className="text-sm">
                  {member.college} ({member.graduationYear})
                </span>
              </div>
              <div className="flex justify-center gap-6">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white shadow-md rounded-full text-purple-600 hover:text-white hover:bg-purple-500 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white shadow-md rounded-full text-purple-600 hover:text-white hover:bg-purple-500 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
