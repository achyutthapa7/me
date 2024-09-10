import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample project data with updated image URLs from Unsplash
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A fully functional e-commerce site with Stripe payment integration, providing a seamless shopping experience.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?&w=600&q=80",
    githubUrl: "https://github.com/achyutthapa7/kinbech-server",
    challenges:
      "Integrating multiple payment methods and ensuring data security.",
    solutions:
      "Implemented Stripe API for secure and seamless payment processing, and used JWT for authentication.",
    outcome: "Enhanced user trust and increased sales by 30%.",
  },
  {
    id: 2,
    title: "Social Media Application",
    description:
      "A dynamic social media platform with user profiles, real-time chat, and post functionalities.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?&w=600&q=80",
    githubUrl: "https://github.com/achyutthapa7/LinkUp-server",
    challenges: "Ensuring real-time updates and maintaining scalability.",
    solutions:
      "Utilized WebSocket for real-time communication and optimized database queries for scalability.",
    outcome: "Achieved real-time interactions with over 10,000 active users.",
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header Section */}
      <section className="py-32 bg-gradient-to-r from-green-400 to-teal-500 text-white text-center">
        <div className="container mx-auto px-6 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore some of the projects I've worked on. Each project highlights
            my skills and showcases the impact of my work.
          </p>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-blue-600 flex items-center"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  </div>
                  <Link
                    to={`/portfolio/${encodeURIComponent(project.title)}`}
                    className="block mt-4 text-blue-600 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
