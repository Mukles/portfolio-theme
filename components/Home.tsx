import {
  ArrowDownTrayIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import { moveUpAndDown } from "@/animations/animate";
import { motion } from "framer-motion";
import { fadeInUp } from "./About";
import SubTitle from "./sub-title";

const zoomIn = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: [1, 1.2, 1, 1.1, 1],
    transition: { delay: 0.5, duration: 0.8, ease: "easeIn" },
  },
};

const imgReavel = {
  hidden: { y: 500, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "circOut" },
  },
};

const Home = () => {
  return (
    <div className="sm:container overflow-hidden">
      <div className="hidden mx-auto absolute top-[35px] left-1/2 w-1/2 translate-x-[-50%] lg:flex justify-between">
        <ul className="flex">
          <li className="pr-10 mr-10 after:[/] ">
            <a href="callto:(+778)675-0765">Call: (+778) 675-0765</a>
          </li>
          <li>
            <a href="mailto:hello_niharika@gmail.com">
              hello_niharika@gmail.com
            </a>
          </li>
        </ul>

        <a className="flex" href="">
          Download CV <ArrowDownTrayIcon className="w-5 h-5 ml-2" />
        </a>
      </div>

      <div className="flex flex-wrap overflow-hidden lg:pt-[100px]">
        <motion.div
          initial={"hidden"}
          whileInView={"animate"}
          transition={{ staggerChildren: 0.15 }}
          className="lg:shrink-0 lg:grow-0 lg:basis-[42%] lg:max-w-[42%] px-[15px]"
        >
          <SubTitle title="About Me" />
          <motion.h1
            variants={fadeInUp}
            className="font-title text-[40px] leading-[48px] sm:text-[45px] sm:leading-[54px] md:text-[55px] md:leading-[66px] xl:text-[68px] xl:leading-[82px] font-bold text-heading"
          >
            Hi, <br /> I&rsquo;m <span className="text-primary">Niharika</span>
          </motion.h1>
          <motion.h3
            variants={fadeInUp}
            className="text-heading text-[20px] leading-[24px] xm:text-[25px] xm:leading-[30px] sm:text-[31px] sm:leading-[37px] my-3"
          >
            Expeert Front-End Devloper
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="leading-[32px] text-[16px] xm:text-lg font-light text-base my-4 max-w-[500px]"
          >
            Need a front-end expert to take
            <b className="text-heading font-medium">
              {" "}
              your website to the next level?{" "}
            </b>
            let&rsquo;s work together to make your vision a reality.
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="#about"
            className="group text-sm leading-[32px] text-white font-medium capitalize px-[22px] py-[10px] mt-6 mb-9 lg:my-12 text-center bg-primary relative inline-flex w-[150px] justify-between items-center rounded-[15px] before:transition-all before:duration-500 hover:before:left-[calc(100%-49px)] before:absolute before:content-[''] before:flex-none before:z-20  before:w-[44px] before:bg-white before:opacity-20 before:left-[5px] before:rounded-[10px] before:h-[calc(100%-10px)]"
          >
            Hire Me
            <span className="group-hover:translate-x-[6px] transition-all duration-500">
              <ArrowLongRightIcon className="w-5 h-5" />
            </span>
          </motion.a>

          <motion.ul variants={fadeInUp} className="flex space-x-3">
            <li>
              <a
                className="hover:shadow-[0_3px_6px_rgba(149,149,149,0.16)] transition-all duration-300 hover:text-primary text-base bg-white p-2 block rounded"
                href=""
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="hover:shadow-[0_3px_6px_rgba(149,149,149,0.16)] transition-all duration-300 hover:text-primary text-base bg-white p-2 block rounded"
                href=""
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="hover:shadow-[0_3px_6px_rgba(149,149,149,0.16)] transition-all duration-300 hover:text-primary text-base bg-white p-2 block rounded"
                href=""
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </li>
          </motion.ul>
        </motion.div>
        <div className="max-width-[650px] w-full lg:basis-[58%] lg:max-w-[58%] px-[15px] lg:pt-0 pt-[50px]">
          <motion.div
            className="relative overflow-hidden"
            variants={imgReavel}
            initial="hidden"
            whileInView="animate"
          >
            <motion.div
              variants={moveUpAndDown}
              animate={"animate"}
              className="absolute top-1/2 left-1 z-50"
            >
              <Image
                width={10}
                height={10}
                src={"/img/shape/shape_03.svg"}
                alt="shape"
              />
            </motion.div>
            <motion.div
              variants={moveUpAndDown}
              animate={"animate"}
              className="absolute top-[30%] right-[10%] z-50"
            >
              <Image
                width={10}
                height={10}
                src={"/img/shape/shape_04.svg"}
                alt="shape"
              />
            </motion.div>
            <motion.div
              variants={moveUpAndDown}
              animate={"animate"}
              className="absolute top-3/4 right-2 z-50"
            >
              <Image
                width={10}
                height={10}
                src={"/img/shape/shape_05.svg"}
                alt="shape"
              />
            </motion.div>
            <motion.div
              variants={moveUpAndDown}
              animate={"animate"}
              className="absolute top-[30%] left-[60px] z-50"
            >
              <Image
                width={10}
                height={10}
                src={"/img/shape/shape_06.svg"}
                alt="shape"
              />
            </motion.div>

            <div className="absolute w-4/5 h-auto top-[40%] left-[50%] translate-x-[-50%] -z-10 ">
              <Image
                width={600}
                height={600}
                alt="shape"
                src={"/img/shape/shape_01.svg"}
              />
            </div>

            <div className="relative">
              <Image
                width={600}
                height={400}
                layout="responsive"
                src={"/img/about.png"}
                alt="about"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
