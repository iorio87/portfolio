import React from "react";
import reactGames from "../assets/portfolio/gamesapp.jpg";
import reactWeather from "../assets/portfolio/weather.jpg";
import reactCommerce from "../assets/portfolio/pgvinos.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactWeather,
      code: "https://github.com/iorio87/weatherApp",
      demo: "https://weather-app-iorio87.vercel.app/",
    },
    {
      id: 2,
      src: reactGames,
      code: "https://github.com/iorio87/PI-VideoGames",
      demo: "https://videogames-app-rose.vercel.app/",
    },
    {
      id: 3,
      src: reactCommerce,
      code: "https://github.com/iorio87/PG-Ecommerce-Vinos",
      demo: "https://front-pgvinos.vercel.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-10 sm:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-3xl sm:text-4xl font-bold border-b-2 sm:border-b-4 border-gray-500 p-2 inline">
            Portfolio
          </p>
          <p className="py-3 sm:py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 px-12">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
