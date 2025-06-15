import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Nav from '../../../Components/Nav';
import LnctFooter from '../../../Components/LnctFooter';
import Home1 from '../../../Components/HomeComponets/Home1';
import Loader from '../../../Components/Loader';
gsap.registerPlugin(ScrollTrigger);

const Credo = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
    return (
    <>
    <Nav/>
    <Home1 
    image={"https://lnct.ac.in/wp-content/uploads/2024/05/%E0%A4%85%E0%A4%82%E0%A4%A4%E0%A4%B0%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%B7%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AF-%E0%A4%9C%E0%A5%88%E0%A4%B5-%E0%A4%B5%E0%A4%BF%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%A4%E0%A4%BE-%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%B8.jpg"}
    heading={"Credo | LNCT Group of Colleges"}
    description={"Learn, achieve and excel with LNCT Group of Colleges!"}
    />
    <section className="py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Credo</h2>
        <div className="w-24 h-0.5 bg-gray-700 mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto text-justify text-lg space-y-6 leading-relaxed">
        <p>
          <span className="text-4xl font-serif float-left mr-2 leading-none font-semibold">W</span>
          e believe, our first responsibility is to the students & their parents in meeting their needs; everything we do must be of high quality.
          We must constantly strive to improve our standards. New equipments must be purchased and new facilities provided.
          Research must be carried on, innovative ideas developed and industries collaborated with.
        </p>

        <p>
          We must be knowledge creators rather than merely knowledge consumers. We must constantly train our teachers & staff,
          men and women who work with us. We must recognize their merit and respect their dignity.
          They must have a sense of loyalty and their compensation must be fair & adequate.
          There must be a clean, orderly and enjoyable environment. We must inculcate in our students principle-bound self-discipline,
          and ability to “take charge”. They must learn to realize and perform and build personality,
          so as to be an asset to any organization they are associated with. They must be ready to face the challenges of competitive world.
        </p>

        <p>
          They must be ready to face the challenges of competitive world and be a successful entrepreneur.
          Our final responsibility is to the community, in which we live, work, and the environment and resources we are endowed by Mother Nature to enjoy.
        </p>

        {/* Code of */}
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-2">CODE OF</h3>
          <p>
            This is invaluable quotation <span className="font-sanskrit">श्रद्धावान् लभते ज्ञानम्</span> has been extracted from shloka 39 of chapter four
            from Shrimad Bhagvata. It means: a person who has “Shardha” – trust, faith and belief shall attain KNOWLEDGE.
            In other words, one who has unwavering faith and the teaching of guru’s, teachers and textbooks only shall obtain knowledge.
          </p>
        </div>

        {/* Mono */}
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-2">MONO</h3>
          <p>
            The symbols/figures appearing in the mono signify that water harnessed by dams is used for irrigation and power generation.
            The electrical power so generated is transmitted and distributed for domestic and industrial purposes to run industries.
            In addition, the non-conventional sources of energy also need to be tapped to complement the conventional energy.
            The sign curve signifies the applications of mathematical concepts to all branches of engineering and technology.
          </p>
        </div>
      </div>
    </section>
    <LnctFooter/>
    </>
  )
}

export default Credo