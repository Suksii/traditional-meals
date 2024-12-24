import React from "react";
import { motion } from "framer-motion";

const Meals = ({ title = "", descriptions = [], image, list = [] }) => {
  return (
    <div className="md:min-h-screen flex flex-col justify-center gap-8 p-6 lg:w-3/4 mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 hover:bg-opacity-0 rounded-lg duration-300"></div>
          <div className="absolute bottom-0 py-2 bg-gray-600 bg-opacity-70 text-gray-50 font-semibold rounded-b-lg w-full text-center">
            {image.desc}
          </div>
        </motion.div>

        <motion.div
          className={`w-full md:w-1/2 space-y-4 ${
            descriptions.length > 0 && "md:space-y-10"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
          {descriptions &&
            descriptions.slice(0, 3).map((description) => (
              <p className="text-lg" key={description.id}>
                {description.description}
              </p>
            ))}
          {list &&
            list.slice(0, 8).map((description) => (
              <p className="text-lg" key={description.id}>
                {description.description}
              </p>
            ))}
        </motion.div>
      </div>

      <motion.div
        className={`space-y-4 ${
          descriptions.length > 0 ? "md:space-y-10" : "pb-10"
        } w-full mx-auto`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {descriptions &&
          descriptions.slice(3).map((description) => (
            <p className="text-lg" key={description.id}>
              {description.description}
            </p>
          ))}
        {list &&
          list.slice(8).map((description) => (
            <p className="text-lg" key={description.id}>
              {description.description}
            </p>
          ))}
      </motion.div>
    </div>
  );
};

export default Meals;
