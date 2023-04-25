import { fadeInUp } from "@/animations/animate";
import { motion } from "framer-motion";
import SubTitle from "./sub-title";

const Resume = () => {
  return (
    <div className="sm:container">
      <div className="flex flex-wrap">
        <div className="w-full lg:grow-0 lg:shrink-0 lg:basis-1/2 lg:max-w-[50%] px-[15px]">
          <div>
            <SubTitle className="mb-11" title="Qualification" />
            <motion.h1
              variants={fadeInUp}
              initial={"hidden"}
              whileInView={"animate"}
              className="section-title"
            >
              My Education
            </motion.h1>
          </div>
          <motion.div
            initial={"hidden"}
            whileInView={"animate"}
            transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
            className="max-w-[485px] mt-11"
          >
            {[...Array(2)].map((item, i) => (
              <motion.div variants={fadeInUp} key={i} className="flex">
                <span className="w-[90px] flex-none text-[16px] leading-[32px] text-heading font-light">
                  2010-2014
                </span>
                <div className="pl-5 pb-11 relative before:content-[''] before:absolute before:w-px before:left-0 before:top-[-10px] before:h-full before:bg-[#E8E8E8] before:z-20 after:absolute after:w-[5px] after:z-30 after:h-[5px] after:top-3 after:bg-primary -after:top[12px after:rotate-45 after:left-[-2px]">
                  <h3 className="text-[16px] leading-[32px] text-primary">
                    BSC
                  </h3>
                  <h4 className="text-xl leading-[24px] text-heading mb-3 font-medium">
                    Computer Science
                  </h4>
                  <h5 className="text-[16px] leading-[19px] text-[#78add9] mb-[20px]">
                    South University Of Bangladesh
                  </h5>
                  <p className="text-[16px] leading-[32px] text-base">
                    Major in UI Design, UX Design, Interaction Design, User
                    Empathy, Branding.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="w-full lg:grow-0 lg:shrink-0 lg:basis-1/2 lg:max-w-[50%] px-[15px]">
          <div>
            <SubTitle
              className="mb-11"
              title="Experiecne
"
            />
            <motion.h1
              variants={fadeInUp}
              initial={"hidden"}
              whileInView={"animate"}
              className="section-title"
            >
              My Experiecne
            </motion.h1>
          </div>

          <motion.div
            initial={"hidden"}
            whileInView={"animate"}
            transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
            className="max-w-[485px] mt-11"
          >
            {[...Array(2)].map((item, i) => (
              <motion.div variants={fadeInUp} key={i} className="flex">
                <span className="w-[90px] flex-none text-[16px] leading-[32px] text-heading font-light">
                  2010-2014
                </span>
                <div className="pl-5 pb-11 relative before:content-[''] before:absolute before:w-px before:left-0 before:top-[-10px] before:h-full before:bg-[#E8E8E8] before:z-20 after:absolute after:w-[5px] after:z-30 after:h-[5px] after:top-3 after:bg-primary -after:top[12px after:rotate-45 after:left-[-2px]">
                  <h3 className="text-[16px] leading-[32px] text-primary">
                    BSC
                  </h3>
                  <h4 className="text-xl leading-[24px] text-heading mb-3 font-medium">
                    Computer Science
                  </h4>
                  <h5 className="text-[16px] leading-[19px] text-[#78add9] mb-[20px]">
                    South University Of Bangladesh
                  </h5>
                  <p className="text-[16px] leading-[32px] text-base">
                    Major in UI Design, UX Design, Interaction Design, User
                    Empathy, Branding.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
