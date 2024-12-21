import React from "react";

const Bakery = ({ title, descriptions, images }) => {
  return (
    <div className="md:min-h-screen flex flex-col justify-center gap-8 p-6 lg:w-3/4 mx-auto mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        {title}
      </h2>
      {descriptions &&
        descriptions.map((description) => (
          <p className="text-lg" key={description.id}>
            {description.description}
          </p>
        ))}

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          images.length > 2 ? "lg:grid-cols-3" : ""
        } gap-6`}
      >
        {images &&
          images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.image}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Bakery;
