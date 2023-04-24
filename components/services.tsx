import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "./About";
import SubTitle from "./sub-title";
import TypedAnimation from "./typed-animation";

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
  hidden: { y: 200, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.8, ease: "circOut" },
  },
};

const Services = () => {
  return (
    <div className="sm:container overflow-hidden">
      <div className="flex flex-wrap overflow-hidden">
        <div className="lg:grow-0 lg:shrink-0 lg:basis-[58%] w-full lg:max-w-[58%] px-[15px]">
          <SubTitle className={"mb-[74px]"} title="Services" />

          <motion.div
            variants={imgReavel}
            initial="hidden"
            animate="animate"
            className="relative overflow-hidden max-w-[580px]"
          >
            <div className="relative">
              <Image
                width={600}
                height={300}
                src={"/img/services.png"}
                alt="about"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={"hidden"}
          whileInView={"animate"}
          transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
          className="lg:shrink-0 lg:grow-0 lg:basis-[41%] lg:max-w-[41%] max-w-[450px] w-full px-[15px] pt-5 lg:pt-[160px]"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-title text-[28px] md:leading-[66px] sm:text-[35px] sm:leading-[47px] font-bold text-heading"
          >
            What{" "}
            <span className="text-primary">
              <TypedAnimation text={"Services"} />
            </span>{" "}
            I Provde To My Clients In Here.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="leading-[32px] text-[16px] font-light text-base my-4"
          >
            I always want to be able to meet the goals of my clients, I value my
            services as a designer through my work. You may like my
            <b className="text-heading font-medium"> services.</b>
          </motion.p>

          <motion.ul variants={fadeInUp} className="flex flex-wrap mt-9">
            {[...Array(4)].map((item, i) => (
              <li
                key={i}
                className="flex items-center space-x-3 lg:basis-1/2 basis-full max-w-[100%] lg:max-w-[50%] py-5"
              >
                <div className="w-[44px] h-[44px] rounded-full bg-primary flex items-center justify-center flex-none">
                  <Image
                    src={"/img/service-icon1.png"}
                    alt="service-icon"
                    width={25}
                    height={25}
                  />
                </div>
                <h4 className="text-[20px] leading-[24px] text-heading font-medium px-1">
                  App Design
                </h4>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
