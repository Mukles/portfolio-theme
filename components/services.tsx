import { fadeInUp, imgReavel } from "@/animations/animate";
import { motion } from "framer-motion";
import Image from "next/image";
import SubTitle from "./sub-title";
import TypedAnimation from "./typed-animation";

const Services = () => {
  return (
    <div className="sm:container">
      <div className="flex flex-wrap items-center">
        <div className="lg:grow-0 lg:shrink-0 lg:basis-[58%] w-full lg:max-w-[58%] px-[15px]">
          <motion.div>
            <SubTitle className={"mb-[73px]"} title="Services" />
            <motion.div
              variants={imgReavel}
              initial="hidden"
              whileInView={"animate"}
              className="max-w-[600px] relative"
            >
              <Image
                width={576}
                height={539}
                src={"/img/services.png"}
                alt="about"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={"hidden"}
          whileInView={"animate"}
          transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
          className="lg:shrink-0 lg:grow-0 lg:basis-[41%] lg:max-w-[41%] max-w-[450px] w-full px-[15px]"
        >
          <div className="max-w-[450px] ml-auto pt-[50px] lg:pt-[100px]">
            <motion.h1 variants={fadeInUp} className="section-title">
              What
              <TypedAnimation text={"Services"} />I Provde To My Clients In
              Here.
            </motion.h1>
            <motion.p variants={fadeInUp} className="section-desc">
              I always want to be able to meet the goals of my clients, I value
              my services as a designer through my work. You may like my
              <b className="text-heading font-medium"> services.</b>
            </motion.p>

            <motion.ul variants={fadeInUp} className="flex flex-wrap">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
