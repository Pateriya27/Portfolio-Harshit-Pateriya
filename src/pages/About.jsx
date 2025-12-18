import React from "react";
import { GraduationCap, FolderCheck, Smile, Star } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-slate-100 to-white w-full py-16 mt-2">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-col">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row mt-10 gap-10">
          {/* Description */}
          <div className="md:w-2/3 space-y-5 text-gray-600 text-sm md:text-base leading-6">
            <p>
            I’m a passionate Java Full Stack Developer specializing in building secure, scalable, and high-performance web applications. With a strong foundation in <span className="font-semibold">Java, Spring Boot, REST APIs, Hibernate/JPA</span>, and front-end technologies like <span className="font-semibold">HTML, CSS, JavaScript, and React</span>, I enjoy turning ideas into reliable, user-friendly solutions through clean and efficient code. <br /><br />
            </p>
            <p>
            In addition to development, I work with DevSecOps tools such as <span className="font-semibold">Git, Maven/Gradle, JUnit, Mockito, SLF4J, Log4j, Jenkins, Docker, Kubernetes, AWS, and SonarQube</span> to automate builds, ensure code quality, and enable secure CI/CD pipelines. I believe in embedding security and quality at every stage of the software development lifecycle.
            </p>
            <p>
            Explore my projects to see how I combine strong backend logic with responsive front-end design—whether it’s developing full-stack applications, integrating APIs, implementing security best practices, or optimizing performance for real-world use cases.
            </p>
            <p>
              I’m always eager to learn new tools, tackle challenges, and
              collaborate on meaningful projects. When I’m not coding, you’ll
              find me exploring new tech, contributing to open source, or
              enjoying coffee and design podcasts.
            </p>
          </div>

          {/* Experience Section */}
          <div className="md:w-1/3 flex flex-wrap gap-5 justify-center">
            {[
              {
                icon: <GraduationCap className="text-blue-600 mb-2" size={28} />,
                title: "Fresher",
                subtitle: "Years of Experience",
              },
              {
                icon: <FolderCheck className="text-green-600 mb-2" size={28} />,
                title: "5+",
                subtitle: "Projects Completed",
              },
              {
                icon: <Smile className="text-yellow-500 mb-2" size={28} />,
                title: "1+",
                subtitle: "Happy Clients",
              },
              {
                icon: <Star className="text-purple-600 mb-2" size={28} />,
                title: "100%",
                subtitle: "Satisfaction Rate",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="flex flex-col justify-center items-center bg-white shadow-md hover:shadow-lg transition w-40 h-32 rounded-xl p-4"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
              >
                {card.icon}
                <p className="font-bold">{card.title}</p>
                <p className="text-gray-500 text-sm">{card.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;