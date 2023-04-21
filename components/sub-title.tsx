import { motion } from "framer-motion";
import { fadeInUp } from "./About";

interface Props {
  title: string;
  className?: string;
}

const SubTitle = ({ title, className = "mb-4" }: Props) => {
  return (
    <motion.h3
      variants={fadeInUp}
      className={
        "before:content-[''] before:top-1/2 before:bg-[#707070] before:absolute before:h-[1px] before:w-[38px] before:left-0 relative " +
        className
      }
    >
      <span className="text-sm leading-[14px] text-[#df5646] font-medium bg-[#FBF1E7] p-2 px-3 ml-[50px] inline-block">
        {title}
      </span>
    </motion.h3>
  );
};

export default SubTitle;
