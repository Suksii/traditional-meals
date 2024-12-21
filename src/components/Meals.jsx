import React from "react";

const Meals = ({ title = "", descriptions = [], image, list = [] }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-8 p-6 lg:w-3/4 mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Tradicija bošnjačkih jela"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div
          className={`w-full md:w-1/2 space-y-4 ${
            descriptions.length > 0 && "md:space-y-10"
          }`}
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
        </div>
      </div>

      <div
        className={`space-y-4 ${
          descriptions.length > 0 ? "md:space-y-10" : "pb-10"
        } w-full mx-auto`}
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
      </div>
    </div>
  );
};

export default Meals;
