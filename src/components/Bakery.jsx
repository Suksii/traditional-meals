import React from "react";
import { motion } from "framer-motion";

const Bakery = ({
  title = "",
  descriptions = [],
  images = [],
  list = [],
  subtitle = "",
  publishedAt = "",
}) => {
  return (
    <div className="md:min-h-screen flex flex-col justify-center gap-8 p-6 lg:w-3/4 mx-auto mb-10">
      <motion.h2
        className="text-2xl font-bold text-gray-800 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-sm text-gray-500 mb-4 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Objavljeno: {publishedAt}
      </motion.p>
      {descriptions &&
        descriptions.length > 0 &&
        descriptions.map((description) => (
          <motion.p
            className="text-lg"
            key={description.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {description.description}
          </motion.p>
        ))}
      {list && list.length > 0 && (
        <>
          <motion.h2
            className="text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {subtitle}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {list.map((description) => (
              <motion.p
                className="text-lg"
                key={description.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {description.description}
              </motion.p>
            ))}
          </div>
        </>
      )}
      <motion.div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          images.length % 3 === 0 ? "lg:grid-cols-3" : ""
        } ${images.length % 4 === 0 ? "lg:grid-cols-4" : ""} gap-6`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {images &&
          images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.image}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black opacity-30 hover:bg-opacity-0 rounded-lg duration-300"></div>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black to-transparent text-white p-2 text-center rounded-b-lg">
                <p className="font-semibold">{image.desc}</p>
                <p className="text-sm text-gray-300 mt-1">
                  Fotografisao: {image.author}
                </p>
              </div>
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default Bakery;
