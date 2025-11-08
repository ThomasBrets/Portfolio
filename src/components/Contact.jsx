import React from "react";
import { CONTACT } from "../assets";
import { motion } from "motion/react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter ">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4 flex justify-center"
          >
          <CiLocationOn className="text-white mr-1 items-center" />
            {CONTACT.city}
          </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 flex justify-center"
        >
          <FaPhone className="text-white mr-1 items-center" />
          {CONTACT.phone}
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className=" hover:text-neutral-400 transition-colors flex justify-center items-center"
        >
          <MdOutlineMailOutline className="text-white mr-1" />
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
