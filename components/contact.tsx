import { fadeInUp } from "@/animations/animate";
import { motion } from "framer-motion";
import Image from "next/image";
import SubTitle from "./sub-title";

const Contact = () => {
  return (
    <div className="sm:container">
      <div className="rounded-[25px] shadow-[0_25px_18px_rgba(183,189,212,0.16)]">
        <div className="flex flex-wrap">
          <div className="lg:grow-0 lg:shrink-0 lg:basis-[58%] lg:max-w-[58%] px-[15px] ">
            <motion.div
              initial={"hidden"}
              whileInView={"animate"}
              transition={{ staggerChildren: 0.18, delayChildren: 0.5 }}
              className="px-[60px] pb-[80px]"
            >
              <motion.div variants={fadeInUp}>
                <SubTitle title="Contact Me" className="mb-14" />
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="section-title max-w-[400px]"
              >
                Estimate Your Project? Let Me Know Here.
              </motion.h1>

              <motion.form variants={fadeInUp} className="w-full">
                <div className="mt-11">
                  <input
                    className="border-b w-full font-light leading-[27px] text-lg focus:border-primary text-[#495057] border-gray-200 focus:outline-none pb-[15px]"
                    type="text"
                    name=""
                    value=""
                    placeholder="What's your name?"
                  />
                </div>
                <div className="mt-11">
                  <input
                    className="border-b w-full font-light leading-[27px] text-lg focus:border-primary text-[#495057] border-gray-200 focus:outline-none pb-[15px]"
                    type="email"
                    name=""
                    value=""
                    placeholder="Your email?"
                  />
                </div>
                <div className="mt-11">
                  <textarea
                    className="border-b w-full font-light leading-[27px] resize-none text-lg focus:border-primary text-[#495057] border-gray-200 focus:outline-none pb-[15px]"
                    name=""
                    value=""
                    placeholder="Tell me about your project?"
                  />
                </div>
              </motion.form>
            </motion.div>
          </div>
          <div className="lg:grow-0 lg:shrink-0 lg:basis-[42%] lg:max-w-[42%] px-[15px]">
            <Image
              width={467}
              height={641}
              src={"/img/contact/contact.png"}
              alt="contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
