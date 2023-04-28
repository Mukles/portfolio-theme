import Image from "next/image";
import React from "react";
import SubTitle from "./sub-title";

const Project = () => {
  return (
    <div className="sm:container">
      <div>
        <div className="max-w-[450px]">
          <SubTitle title="Projects" className="mb-10" />
          <h1 className="section-title">My Complete Projects</h1>
        </div>

        <ul className="flex flex-wrap">
          {[...Array(5)].map((item, i) => (
            <React.Fragment key={i}>
              <li className="pr-4 py-3">
                <button className="bg-primary rounded-full p-3 text-white">
                  All works
                </button>
              </li>
              <li className="pr-4 py-3">
                <button className="bg-primary rounded-full p-3 text-white">
                  sdfasasf asdfas
                </button>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap mt-4">
        {[...Array(3)].map((item, i) => (
          <a
            key={i}
            href="#"
            target="_blank"
            className="lg:basis-1/3 lg:max-w-[33.333%] p-3 block rounded-lg overflow-hidden"
          >
            <div className="shadow-[0_3px_6px_rgba(149,149,149,0.16)] relative overflow-hidden group">
              <figure className="relative overflow-hidden after:block  after:w-full after:pb-[70%] after:bg-gray-300">
                <Image
                  className="absolute top-0 transition-all duration-500 left-0 w-full h-full group-hover:scale-125 group-hover:rotate-6"
                  width={700}
                  height={700}
                  src={"/img/project/1.webp"}
                  alt="project-item"
                />

                <div className="bg-black opacity-60 absolute top-0 left-0 w-full h-full"></div>
              </figure>

              <div className="bg-[#090909] flex text-white justify-between pt-5 px-9 pb-9">
                <h4 className="text-[24px] font-bold leading-[29px]">
                  CBD Gummies
                </h4>
                <p className="opacity-75">Branding</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
