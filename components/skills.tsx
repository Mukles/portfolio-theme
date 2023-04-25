import { fadeInUp, imgReavel } from "@/animations/animate";
import { motion } from "framer-motion";
import Image from "next/image";
import SubTitle from "./sub-title";
import TypedAnimation from "./typed-animation";

const Skills = () => {
  return (
    <div className="sm:container">
      <div className="flex flex-wrap items-center">
        <div className="lg:grow-0 lg:shrink-0 lg:basis-[42%] lg:max-w-[42%] px-[15px]">
          <motion.div
            initial={"hidden"}
            whileInView={"animate"}
            transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
          >
            <SubTitle className={"mb-[45px]"} title="Skills" />
            <div className="max-w-[450px]">
              <motion.h1 variants={fadeInUp} className="section-title">
                As A Designer I Am Good At Fit With Few
                <TypedAnimation text="Skills." />
              </motion.h1>
              <motion.p variants={fadeInUp} className="section-desc mb-[54px]">
                All desigener have good skills to make sure satisfied their
                clints, As a designer I am also specialised few{" "}
                <b className="text-heading font-medium">skills.</b>
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="progress-container max-w-[330px] w-full space-y-5"
              >
                {[...Array(4)].map((item, i) => (
                  <div key={i}>
                    <div className="progress-label flex justify-between mb-1">
                      <h3 className="text-sm leading-[32px] text-heading font-medium">
                        App Design
                      </h3>
                      <h3 className="text-[10px] leading-[32px] text-base font-light">
                        78%
                      </h3>
                    </div>
                    <div className="progress-bar overflow-hidden bg-[#e9eeef] h-2 rounded-full relative">
                      <motion.span
                        className="bg-[#75A9D6] absolute left-0 top-0 h-full"
                        whileInView={{ width: "78%" }}
                        transition={{
                          type: "spring",
                          stiffness: 80,
                          damping: 20,
                        }}
                      ></motion.span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="lg:grow-0 lg:shrink-0 lg:basis-[58%] lg:max-w-[58%] px-[15px] w-full">
          <motion.div
            variants={imgReavel}
            initial={"hidden"}
            whileInView={"animate"}
            className="pt-[55px]"
          >
            <Image
              width={600}
              height={550}
              src="/img/skill/skills.png"
              alt="skill"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
