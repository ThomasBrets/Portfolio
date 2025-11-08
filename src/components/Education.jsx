import React from "react";
import { EDUCATION } from "../assets";
import { motion } from "motion/react";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <div>
        {EDUCATION.map((course, i) => (
          <a
            href="https://www.linkedin.com/in/thomas-bretschneider-69b2a2224/details/certifications/"
            target="_blank"
            key={i}
            className="mb-8 flex flex-wrap lg:justify-center hover:shadow-2xl transition-all duration-400 pb-2"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className=" flex items-center w-full lg:w-1/4"
            >
              <img
                src={course.image}
                alt={course.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{course.title}</h6>
              <p className="mb-4 text-neutral-400">{course.description}</p>
              {course.technologies.map((tech, i) => (
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

export default Education;
