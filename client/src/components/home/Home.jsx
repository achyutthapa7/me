import React from "react";
import me from "../../assets/me.jpg";
const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
        <div className="max-w-3xl text-center">
          <img
            src={me} // Placeholder image for now
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-blue-500 object-cover"
          />
          <h1 className="text-4xl font-bold mb-4">Achyut Thapa</h1>
          <h2 className="text-2xl font-semibold text-blue-500 mb-6">
            Full Stack MERN Developer
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            I am a passionate web developer with over 3 years of experience
            specializing in building full-stack applications with the MERN
            stack. I love creating elegant, user-centric websites and
            applications.
          </p>
          <div className="space-x-4">
            <a
              href="/portfolio"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {/* Skill 1: React */}
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-700">React</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-[75%]"></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">75%</p>
            </div>

            {/* Skill 2: Node.js */}
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-700">Node.js</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-[60%]"></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">60%</p>
            </div>

            {/* Skill 3: MongoDB */}
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-700">MongoDB</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-[65%]"></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">65%</p>
            </div>

            {/* Skill 4: Tailwind CSS */}
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind CSS"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-700">Tailwind CSS</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-[90%]"></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">90%</p>
            </div>

            {/* Skill 5: Express.js */}
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Express"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-700">Express</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-[70%]"></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">70%</p>
            </div>

            {/* Skill 6: JavaScript */}
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-16 h-16 mb-2"
              />
              <p className="text-gray-700">JavaScript</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-[75%]"></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">75%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
