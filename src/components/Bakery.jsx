import React from "react";

const Bakery = ({
  title = "",
  descriptions = [],
  images = [],
  list = [],
  subtitle = "",
}) => {
  return (
    <div className="md:min-h-screen flex flex-col justify-center gap-8 p-6 lg:w-3/4 mx-auto mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        {title}
      </h2>
      {descriptions &&
        descriptions.length > 0 &&
        descriptions.map((description) => (
          <p className="text-lg" key={description.id}>
            {description.description}
          </p>
        ))}
      {list && list.length > 0 && (
        <>
          <h2 className="text-lg">{subtitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {list.map((description) => (
              <p className="text-lg" key={description.id}>
                {description.description}
              </p>
            ))}
          </div>
        </>
      )}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          images.length % 3 === 0 ? "lg:grid-cols-3" : ""
        } ${images.length % 4 === 0 ? "lg:grid-cols-4" : ""} gap-6`}
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
              <div className="absolute bottom-0 py-2 bg-gray-600 bg-opacity-70 text-gray-50 font-semibold rounded-b-lg w-full text-center">
                {image.desc}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Bakery;
