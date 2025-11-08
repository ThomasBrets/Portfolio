import React from "react";
import { PROJECTS } from "../assets";
import github from "../assets/github.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, i) => (
          <a
            href={project.web}
            target="_blank"
            key={i}
            className="mb-8 flex flex-wrap lg:justify-center hover:shadow-2xl transition-all duration-400"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="relative w-full mr-4 lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                // width={280}
                // height={280}
                className="mb-6 h-full w-full  rounded object-contain "
              />
              <div className="absolute bottom-0 right-0 flex gap-2 mb-6 mr-3">
                {project.source_code_links.map((link, index) => (
                  <div
                    key={index}
                    onClick={() => window.open(link.url, "_blank")}
                    className={`w-8 h-8 rounded-full flex justify-center items-center cursor-pointer transition-transform hover:scale-110 ${
                      index === 0
                        ? "bg-black text-white" // Primer botón (fondo negro)
                        : "bg-white border border-black text-black" // Segundo botón (fondo blanco)
                    }`}
                    title={link.name}
                  >
                    <img
                      src={github}
                      alt={link.name}
                      className={`w-1/2 h-1/2 object-contain ${
                        index === 0 ? "invert-0" : "invert"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="mr-2 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
