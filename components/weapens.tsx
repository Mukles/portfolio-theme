import { fadeInUp } from "@/animations/animate";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SubTitle from "./sub-title";
import TypedAnimation from "./typed-animation";

const Weapens = () => {
  return (
    <div className="sm:container">
      <div className="flex flex-wrap items-center">
        <div className="lg:grow-0 lg:shrink-0 lg:basis-1/2 lg:max-w-[50%] w-full px-[15px]">
          <motion.div
            initial={"hidden"}
            whileInView={"animate"}
            transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
          >
            <motion.div variants={fadeInUp}>
              <SubTitle className={"mb-[48px]"} title="My Weapons" />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="section-title">
              My <TypedAnimation text="Favorite Tools" /> Which I Used Everyday
              In My Life.
            </motion.h1>

            <motion.p variants={fadeInUp} className="section-desc mt-9">
              I always loved those software that I use in my work, because I am
              very good at these, these are the main tools of my design career
              those are help me for make sure my Clients satisfication.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="#home"
                className="font-medium text-heading text-lg inline-flex leading-[50px] pb-3 items-center underline hover:text-primary transition-colors hover:no-underline group"
              >
                Lets See My Work Process
                <ArrowLongRightIcon className="w-5 h-5 ml-3 transition-transform transform-gpu group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="lg:grow-0 lg:shrink-0 lg:basis-1/2 lg:max-w-[50%] w-full px-[15px]">
          <div className="max-w-[535px] w-full ml-auto relative pb-[82%]">
            <div className="weapen top-[28%] left-[28%] pb-[36%] w-[36%]">
              <Image
                width={73}
                height={110}
                src={"/img/weapens/figma.png"}
                alt="figma"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[66%]"
              />
            </div>
            <div className="weapen top-[8%] left-[5%] w-[18%] pb-[18%]">
              <Image
                width={62}
                height={62}
                src={"/img/weapens/xd.png"}
                alt="xd"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[66%]"
              />
            </div>

            <div className="weapen top-0 left-[48%] w-[14.5%] pb-[14.5%]">
              <Image
                width={33}
                height={33}
                src={"/img/weapens/linkedin.png"}
                alt="linkedin"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[66%]"
              />
            </div>

            <div className="weapen top-[5%] right-0 w-[28.5%] pb-[28.5%]">
              <Image
                width={74}
                height={76}
                src={"/img/weapens/sketch.png"}
                alt="sketch"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[66%]"
              />
            </div>

            <div className="weapen left-[2%] top-[46%] w-[20.2%] pb-[19.5%]">
              <Image
                width={57}
                height={58}
                src={"/img/weapens/google.png"}
                alt="goggle"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[66%]"
              />
            </div>

            <div className="weapen left-[5%] bottom-0 w-[15%] pb-[15%]">
              <Image
                width={44}
                height={44}
                src={"/img/weapens/dribbble.png"}
                alt="dribbble"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[66%]"
              />
            </div>

            <div className="weapen left-[25%] bottom-0 w-[18%] pb-[18%]">
              <Image
                width={64}
                height={64}
                src={"/img/weapens/skype.png"}
                alt="skype"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[66%]"
              />
            </div>

            <div className="weapen right-[10%] bottom-[8%] w-[22%] pb-[22%]">
              <Image
                width={59}
                height={59}
                src={"/img/weapens/slack.png"}
                alt="slack"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[66%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weapens;
