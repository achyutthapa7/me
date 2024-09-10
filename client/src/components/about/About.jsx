import React from "react";
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaTools,
  FaBriefcase,
  FaGit,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaSass,
} from "react-icons/fa";
import me from "../../assets/me.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header Section */}
      <section className="py-32 bg-gradient-to-r from-green-400 to-teal-500 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            I’m Achyut Thapa, a passionate Full Stack MERN Developer with a
            drive for creating dynamic and engaging web applications. With a
            keen eye for detail and a commitment to excellence, I aim to build
            technology that solves real-world problems.
          </p>
        </div>
      </section>

      {/* Extended Bio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img
                src={me}
                alt="Achyut Thapa"
                className="w-48 h-48 rounded-[20px] shadow-lg object-cover mx-auto"
              />
            </div>
            <div className="md:w-2/3 md:pl-8 text-center md:text-left">
              <p className="text-gray-700 text-lg mb-4">
                I have a strong foundation in computer science and web
                development. Over the past few years, I’ve worked on various
                exciting projects, honing my skills and applying my knowledge to
                solve complex problems. My journey includes developing an
                e-commerce platform with integrated payment solutions and a
                dynamic social media application.
              </p>
              <p className="text-gray-700 text-lg">
                My passion for technology drives me to continuously learn and
                adapt, ensuring that I stay current with industry trends and
                best practices. I believe in the power of collaboration and am
                always eager to take on new challenges that push me beyond my
                comfort zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Skills & Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaReact className="text-5xl mb-4 text-blue-600" />
              <p className="text-lg font-semibold">React</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaNode className="text-5xl mb-4 text-green-600" />
              <p className="text-lg font-semibold">Node.js</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaDatabase className="text-5xl mb-4 text-green-800" />
              <p className="text-lg font-semibold">MongoDB</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaTools className="text-5xl mb-4 text-gray-700" />
              <p className="text-lg font-semibold">Tools</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaGit className="text-5xl mb-4 text-red-600" />
              <p className="text-lg font-semibold">Git</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaGithub className="text-5xl mb-4 text-black" />
              <p className="text-lg font-semibold">GitHub</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaHtml5 className="text-5xl mb-4 text-orange-600" />
              <p className="text-lg font-semibold">HTML</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaCss3Alt className="text-5xl mb-4 text-blue-600" />
              <p className="text-lg font-semibold">CSS</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaSass className="text-5xl mb-4 text-pink-600" />
              <p className="text-lg font-semibold">SCSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Professional Experience
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            <div className="md:w-1/2">
              <Link to={"/portfolio/E-Commerce Platform"}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <FaBriefcase className="mr-2 text-blue-600" /> E-commerce
                    Platform
                  </h3>
                  <p className="text-gray-700">
                    Developed a fully functional e-commerce platform with Stripe
                    integration for payments and a user-friendly interface.
                  </p>
                </div>
              </Link>
            </div>

            <div className="md:w-1/2">
              <Link to={"/portfolio/Social Media Application"}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <FaBriefcase className="mr-2 text-blue-600" /> Social Media
                    Application
                  </h3>
                  <p className="text-gray-700">
                    Created a social media application with responsive design,
                    user engagement features, and a scalable backend.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Hobbies Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Interests & Hobbies
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Outside of technology, I enjoy hiking, exploring new places, and
            reading. These interests help me stay inspired and bring a fresh
            perspective to my work. I believe that a balanced life contributes
            to creative thinking and problem-solving abilities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
