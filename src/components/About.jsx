import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-[90px]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold border-b-2 sm:border-b-4 border-gray-500 p-2 inline">
            About
          </p>
        </div>

        <p className="sm:text-xl">
          Hi! I'm Luciano, passionate about programming, investments and above
          all for learning new things all the time. Since I was a kid I've
          always been interested in programming and I always did it as a hobby
          in my free time, but in 2020 I decided that I wanted to do it
          professionally and dedicate myself 100% to what I really like so I
          started a technical degree in Systems and in 2022 the FullStack
          Developer bootcamp here at SoyHenry. In addition to what I learned at
          SoyHenry I have knowledge in Python and Java.
        </p>

        <br />

        <p className="sm:text-xl">
          More about me... I have a bachelor's degree in administration and I
          have been working in the treasury area for 15 years. I'm also an
          enthusiast of new technologies focusing in the last 5 years in the
          crypto world both from development (Blockchains, NFT, NFTGames, DAOs)
          and investments (cryptocurrencies, Defi).
        </p>
      </div>
    </div>
  );
};

export default About;
